// Vercel serverless function - keeps the Anthropic API key server-side.
// Deploy target: Vercel. The main site stays on GitHub Pages; only this
// endpoint needs to live here. Set ANTHROPIC_API_KEY in the Vercel
// project's environment variables.

const ALLOWED_ORIGINS = [
  "https://www.ariericyron.com",
  "https://ariericyron.com",
  "http://localhost:3000",
];

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 200;
const MAX_QUESTION_LENGTH = 500;
const MAX_CONTEXT_LENGTH = 4000;

// Best-effort per-IP rate limit. Resets on cold start and isn't shared
// across concurrent function instances - a real limit needs a shared
// store (e.g. Upstash Redis). Good enough for a personal portfolio's
// traffic; revisit if abuse becomes a real problem.
const REQUEST_LOG = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 20;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (REQUEST_LOG.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  REQUEST_LOG.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

function setCorsHeaders(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = async (req, res) => {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
    return;
  }

  const { question, context } = req.body || {};

  if (
    typeof question !== "string" ||
    !question.trim() ||
    question.length > MAX_QUESTION_LENGTH
  ) {
    res.status(400).json({ error: "Invalid question." });
    return;
  }

  const safeContext =
    typeof context === "string" ? context.slice(0, MAX_CONTEXT_LENGTH) : "";

  const systemPrompt = `You are a helpful assistant embedded on Cyron Arieri's personal portfolio website. Answer visitor questions about Cyron's background, skills, and experience using ONLY the information below. Keep answers to 2-3 short sentences. If a question is unrelated to Cyron or his work, politely say you can only answer questions about Cyron's portfolio.

${safeContext}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemPrompt,
        messages: [{ role: "user", content: question }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", response.status, errText);
      res
        .status(502)
        .json({ error: "The assistant is temporarily unavailable." });
      return;
    }

    const data = await response.json();
    const answer =
      data.content?.[0]?.text || "Sorry, I couldn't generate a response.";
    res.status(200).json({ answer });
  } catch (err) {
    console.error("Chat handler error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
};

import { useEffect, useMemo, useRef, useState } from "react";
import "./AiAssistant.css";
import {
  greeting,
  skills,
  experience,
  degrees,
  certifications,
} from "../../portfolio.js";

const API_URL = process.env.REACT_APP_CHAT_API_URL;
const MAX_MESSAGES = 8;

function buildContext() {
  const skillLines = skills.data
    .map(
      (cat) =>
        `${cat.title}: ${cat.softwareSkills.map((s) => s.skillName).join(", ")}`,
    )
    .join("\n");

  const experienceLines = experience.sections
    .flatMap((section) =>
      section.experiences.map(
        (exp) =>
          `${exp.title} at ${exp.company} (${exp.duration}, ${exp.location}): ${exp.description}`,
      ),
    )
    .join("\n");

  const educationLines = degrees.degrees
    .map((d) => `${d.subtitle} at ${d.title} (${d.duration})`)
    .join("\n");

  const certificationLines = certifications.certifications
    .map((c) => `${c.title} ${c.subtitle}`)
    .join("\n");

  return `Name: ${greeting.title}
Summary: ${greeting.subTitle}

Skills:
${skillLines}

Experience:
${experienceLines}

Education:
${educationLines}

Certifications:
${certificationLines}

GitHub: ${greeting.githubProfile}
Resume: ${greeting.resumeLink}`;
}

export default function AiAssistant({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const context = useMemo(buildContext, []);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  if (!API_URL) return null;

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const limitReached = userMessageCount >= MAX_MESSAGES;

  async function sendMessage(e) {
    e.preventDefault();
    const question = input.trim();
    if (!question || isLoading || limitReached) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, context }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.answer },
      ]);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="ai-assistant">
      {isOpen && (
        <div
          className="ai-assistant-panel"
          style={{ backgroundColor: theme.body, borderColor: theme.highlight }}
        >
          <div
            className="ai-assistant-header"
            style={{ backgroundColor: theme.jacketColor }}
          >
            <span>Ask about {greeting.title}</span>
            <button
              type="button"
              className="ai-assistant-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>
          <div className="ai-assistant-messages">
            {messages.length === 0 && (
              <p
                className="ai-assistant-hint"
                style={{ color: theme.secondaryText }}
              >
                Ask me anything about {greeting.title}'s skills, experience, or
                projects.
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`ai-assistant-message ai-assistant-message-${m.role}`}
                style={
                  m.role === "user"
                    ? { backgroundColor: theme.jacketColor, color: "#fff" }
                    : { backgroundColor: theme.highlight, color: theme.text }
                }
              >
                {m.text}
              </div>
            ))}
            {isLoading && (
              <div
                className="ai-assistant-message ai-assistant-message-assistant"
                style={{ backgroundColor: theme.highlight, color: theme.text }}
              >
                Thinking…
              </div>
            )}
            {error && <div className="ai-assistant-error">{error}</div>}
            {limitReached && (
              <p
                className="ai-assistant-hint"
                style={{ color: theme.secondaryText }}
              >
                You've reached the limit for this session — feel free to reach
                out directly via the contact page.
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="ai-assistant-input-row" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                limitReached ? "Session limit reached" : "Type a question…"
              }
              disabled={isLoading || limitReached}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={isLoading || limitReached || !input.trim()}
              style={{ backgroundColor: theme.jacketColor }}
            >
              Send
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="ai-assistant-toggle"
        style={{ backgroundColor: theme.jacketColor }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : `Ask about ${greeting.title}`}
      >
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
}

# Cyron Arieri — Portfolio

Personal portfolio site for [ariericyron.ca](https://www.ariericyron.ca/), built with React 18 and deployed to GitHub Pages.

## Tech stack

- **React 18** + **React Router v7** (`HashRouter`)
- **styled-components** for theming, **BaseUI** / **react-bootstrap** for a few UI primitives
- **framer-motion**-backed **react-reveal** for scroll animations
- Create React App (`react-scripts`) for build tooling

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # run the test suite once with --watchAll=false, or omit the flag to watch
npm run build    # production build to /build
```

## Project structure

```
src/
  portfolio.js        # all site content (name, bio, skills, experience, education, etc.)
  theme.js             # color themes; chosenTheme picks the active one
  pages/               # one folder per route, composes containers + components
  containers/          # larger content-aware sections (Greeting, Skills, Certifications, ...)
  components/          # small reusable pieces (Header, Footer, cards, buttons, ...)
  shared/              # static JSON data (contact info, open-source project list)
```

To change what's on the site — bio, skills, work experience, education, certifications, contact links — edit **`src/portfolio.js`**. Everything else just renders that data.

## Deployment

The site deploys to GitHub Pages via [`gh-pages`](https://github.com/tschaub/gh-pages):

```bash
npm run deploy
```

This builds the app and pushes `/build` to the `gh-pages` branch. The custom domain is configured via `CNAME`.

## AI assistant (optional)

The site has a floating chat widget (bottom-left) that answers visitor questions about Cyron's background, grounded in `src/portfolio.js`. It's inert by default — the widget doesn't render at all unless configured, so skipping this section is safe.

To enable it:

1. Deploy this repo to [Vercel](https://vercel.com) (import the GitHub repo — it auto-detects the `api/chat.js` serverless function, no config needed). This is separate from the GitHub Pages deploy; the main site stays on GitHub Pages, only the `/api/chat` endpoint needs to live on Vercel.
2. Get an API key from [console.anthropic.com](https://console.anthropic.com) and add it as an environment variable named `ANTHROPIC_API_KEY` in the Vercel project settings.
3. Set `REACT_APP_CHAT_API_URL` to your Vercel deployment's URL (e.g. `https://your-project.vercel.app`) wherever the GitHub Pages build runs (e.g. as a build-time env var in CI, or a local `.env` file for testing), then rebuild/redeploy the GitHub Pages site.

Cost controls already built in: the backend uses Haiku (the cheapest/fastest model), caps responses to 200 tokens, has a best-effort per-IP rate limit (20 requests/hour — resets on cold start, not a hard guarantee), and the widget itself caps each browser session to 8 messages. If you ever see real abuse, the next step would be a proper shared-store rate limiter (e.g. Upstash Redis) instead of the in-memory one in `api/chat.js`.

## Notes

- Routing uses a hash-based router (`/#/projects`, etc.) since the site is a static host with no server-side rewrites.
- `react-scripts` (Create React App) is unmaintained upstream; some transitive dev-tooling vulnerabilities from `npm audit` can't be resolved without ejecting or migrating off it.

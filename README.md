# Cyron Arieri — Portfolio

Personal portfolio site for [ariericyron.com](https://www.ariericyron.com/), built with React 18 and deployed to GitHub Pages.

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

## Notes

- Routing uses a hash-based router (`/#/projects`, etc.) since the site is a static host with no server-side rewrites.
- `react-scripts` (Create React App) is unmaintained upstream; some transitive dev-tooling vulnerabilities from `npm audit` can't be resolved without ejecting or migrating off it.

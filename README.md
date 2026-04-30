# personal-website

Vue 3 + Vite + TypeScript personal site with Vue Router.

## Setup

Use a normal **Node.js install that includes `npm`** (e.g. from [nodejs.org](https://nodejs.org) or your version manager). Some sandboxed or IDE-only shells expose `node` without `npm`, which blocks `npm install` / `npm run build`.

This repo may include a **portable Windows Node** tree under `.tools/node-v*-win-x64/` (gitignored) after a one-time download; use that folder’s `npm.cmd` if system `npm` is missing.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content

- Homepage copy and sections: `src/content/home.ts`
- Projects: `src/content/projects.ts`
- About: `src/content/about.ts`
- Resume PDF is served from `public/DamanveerSingh_Resume.pdf` (keep in sync with root copy if you update the PDF).
- Global styles: import chain starts at `src/styles/index.css` (tokens, base, layout, section helpers).

## Parallel agent note

If subagents reported an empty workspace, ensure this repository is checked out in the Cursor workspace root so `src/` exists before delegating file-scoped tasks.

# portfolio-src

Source for **la-chica-morena.github.io** (Priyansha Sharma's portfolio).

The repo root is the published GitHub Pages site. This folder is the Vite project
that generates it — GitHub Pages ignores `portfolio-src/` and serves `../index.html`
plus `../assets/`.

## Working on it

```bash
cd portfolio-src
npm install
npm run dev      # http://localhost:5173
npm run build    # writes ../index.html and ../assets/ , then commit the repo root
```

`npm run build` runs `prebuild` first, which deletes `../assets` so old hashed
bundles don't pile up.

> **Do not set `build.emptyOutDir` to `true`.** `outDir` is the repo root, which
> holds `.git`, the CV PDF, and this folder. Vite would wipe all of it.

## Where things live

| What | Where |
|---|---|
| **All site content** (name, role, metrics, experience, education, skills) | `src/data/profile.js` |
| Section headings and page structure | `src/App.jsx` |
| three.js scene | `src/components/Scene.jsx`, helpers in `src/lib/scene.js` |
| Styles | `src/styles/index.css` |
| SEO tags, JSON-LD | `index.html` |
| CV PDF, favicon | `public/` |

To update the CV: drop the new PDF in `public/Priyansha_Sharma_CV.pdf`, edit
`src/data/profile.js` to match, rebuild, commit.

## Pinned versions

`react` 19.2.6, `three` 0.171.0, `lucide-react` 0.468.0 — these match the original
deployed bundle. `three` in particular is pinned because `Scene.jsx` was
reconstructed against r171.

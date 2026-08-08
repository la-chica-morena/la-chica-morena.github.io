import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This project lives inside the deploy repo. la-chica-morena.github.io is a GitHub
// Pages site served from the root of main, so Vite builds one level up and writes
// index.html + assets/ straight into the repo root.
//
// emptyOutDir MUST stay false. outDir is the repo root - it contains .git, the CV
// PDF, and this very source folder; letting Vite clear it would destroy the repo.
// Stale hashed bundles are removed by the `prebuild` script, which only touches
// ../assets.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '..',
    emptyOutDir: false,
  },
})

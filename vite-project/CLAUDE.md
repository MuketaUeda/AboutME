# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is Gabriel Rosati's personal portfolio site: a single-page React application (Vite + React 19 + React Router + Tailwind CSS v4) deployed to Vercel.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint over the project
```

There is no test suite configured in this repo.

## Architecture

- **Routing**: `src/App.jsx` defines all routes with `react-router-dom` (`BrowserRouter`/`Routes`/`Route`). Currently two routes: `index` → `Home`, `*` → `NotFound`. New pages go in `src/pages/` and get registered here.
- **Single-page layout**: `src/pages/Home.jsx` stacks all the landing-page sections (`Navbar`, `HeroSection`, `AboutSection`, `SkillsSection`, `ProjectsSection`, `ContactSection`, `Footer`) from `src/components/`. Navigation (`NavBar.jsx`) uses in-page anchor links (`#hero`, `#about`, `#skills`, `#projects`, `#contact`) that match each section's `id`, not router paths — adding a section means adding both a `<section id="...">` block in a component and a matching entry in `navItems` in `NavBar.jsx`.
- **Content-as-data-in-component**: `ProjectsSection.jsx` and `SkillsSection.jsx` hold their content as local arrays (`projects`, `skills`) directly in the component file rather than in a separate data/config file. Skills only carry `name`/`Category` (no arbitrary skill-level percentage — that was intentionally removed). Update projects/skills by editing those arrays in place, including image paths under `public/projects/`.
- **Theming**: Dark/light mode is handled by `ThemeToggle.jsx` toggling the `dark` class on `document.documentElement` and persisting the choice to `localStorage` under the `theme` key (defaults to dark). Tailwind's color tokens (`--color-background`, `--color-primary`, `--color-accent`, `--color-secondary`, `--color-graph`, etc.) are defined as HSL CSS variables in `src/index.css` under `:root` and `.dark`, then mapped into Tailwind's `@theme` — change theme colors there, not by hardcoding hex/rgb classes. `--accent` (gold) and `--graph` (cyan) are semantic, not decorative: accent marks anything AI/ML-related (the "AI-powered" hero word, the `artificial-intelligence` skill category), graph is the third tone reserved for `EmbeddingGraph`'s infra-layer nodes/edges (see below — its product/AI nodes reuse `--primary`/`--accent` instead of introducing new colors).
- **Typography**: `--font-display` (Space Grotesk), `--font-sans` (Inter, body default), `--font-mono` (JetBrains Mono) are defined in `src/index.css`'s `@theme` and loaded via a Google Fonts `@import` at the top of that file. Convention: `font-display` on section/hero headings, `font-mono` on tags/pills/labels/filter buttons (i.e. anything that reads as data), body text stays on the `font-sans` default.
- **Custom Tailwind utilities**: `src/index.css` defines project-specific utilities via `@utility` (`cosmic-button`, `card-hover`, `gradient-border`, `text-glow`, `graph-edge`, `graph-node-dot`) and custom keyframes/animations (`animate-fade-in-delay-*`, `animate-graph-pulse`) registered in the `@theme` block. Prefer these existing utilities for buttons/cards/glow/graph effects instead of re-implementing the same styles inline.
- **Hero signature visual**: `EmbeddingGraph.jsx` renders the Hero's background — a small, physics-simulated graph of real stack technologies (nodes) connected by edges (`graph-edge`/`graph-node-dot` utilities), framing the hero text in a top band and a bottom band. It's an Obsidian-graph-style force simulation (custom rAF loop, no external dependency): nodes in the same band repel each other, edges pull connected nodes together like springs, and the whole thing settles into rest (sleeps the rAF loop) rather than animating forever. Nodes are draggable (pointer events, `pointer-events-auto` only on the node hit-areas, everything else stays `pointer-events-none` so the graph never blocks clicks) and hovering one highlights it plus its real neighbors (via the `EDGES` adjacency) while dimming the rest. Each node has a `category` (`product`/`ai`/`infra`) mapped to an existing theme token — `product` → `--primary`, `ai` → `--accent`, `infra` → `--graph` — via a `--node-color`/`--edge-color` CSS variable consumed by the two utilities, so the graph's palette is literally the same violet/gold/teal used elsewhere on the page rather than a fourth color. Edges only ever connect nodes within the same band (see `NODES`/`EDGES` arrays and `BAND_RANGE`'s per-band vertical fraction bounds) so lines — and now drag movement — never cross the centered hero text or collide with the navbar/CTA/scroll-indicator; keep new edges within-band and re-check `BAND_RANGE` against those fixed-position elements if you add nodes. There is no page-wide decorative background component (the old starfield `StarBackground` was removed) — the rest of the page is a deliberately quiet, extremely dark solid background; motion/decoration is intentionally confined to the Hero.
- **Path alias**: `@/` resolves to `src/` (configured in `vite.config.js`). Some files use it (e.g. `@/lib/utils`), others use relative imports (`../components/...`) — no strict convention is enforced, but prefer `@/` for new code for consistency with `lib/utils`.
- **`cn()` helper** (`src/lib/utils.js`): combines `clsx` + `tailwind-merge` for conditional/merged Tailwind class strings. Use this instead of manual string concatenation when a component has conditional classes.
- **Contact form**: `ContactSection.jsx` submits directly to a Formspree endpoint (`https://formspree.io/f/mwpqrnjq`) via `fetch` — there is no backend in this repo.
- **Static assets**: CV PDFs live in both `cv/` (top-level, linked from `AboutSection.jsx`'s download buttons) and duplicated under `public/projects/`; project screenshots are served from `public/projects/` and referenced with absolute paths (e.g. `/projects/deck.PNG`).
- **Deployment**: `vercel.json` configures Vercel to run `npm run build` and serve `dist/` as a static Vite app.

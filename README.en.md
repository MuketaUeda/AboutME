# Gabriel Rosati — Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

[🌐 Live Demo](https://gabriel-rosati.vercel.app/) · [Versão em português](README.md)

</div>

---

## About

Single-page personal portfolio built with **React + Vite**, **Tailwind CSS v4**, and a **neobrutalist** design (thick borders, hard shadows, no gradients). Supports persistent dark/light theme, a working contact form (Formspree), and about/skills/projects sections whose content lives directly in the code.

No TypeScript, no test suite — it's a small, single-page project.

## Stack

- **React 19** + **React Router** (single `index` route → Home, `*` → 404)
- **Vite 7** (build/dev server)
- **Tailwind CSS v4** — theme tokens in `src/index.css`, mapped into `@theme`
- UI primitives adapted from [neobrutalism-components](https://github.com/ekmas/neobrutalism-components) (converted to plain `.jsx`, no TS)
- **Formspree** for the contact form (no custom backend)

## Running locally

```bash
git clone git@github.com:MuketaUeda/AboutME.git
cd AboutME/vite-project
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build
npm run lint        # ESLint
```

## Structure

```
vite-project/
├── cv/                          # original résumé PDFs (source)
├── public/
│   ├── favicon.svg
│   └── projects/                # project screenshots + résumé PDF copies served in production
├── src/
│   ├── components/
│   │   ├── ui/                  # primitives (Button, Card, Badge, Input, Textarea, Label, Alert)
│   │   ├── NavBar.jsx, HeroSection.jsx, AboutSection.jsx,
│   │   ├── SkillsSection.jsx, ProjectsSection.jsx, ContactSection.jsx,
│   │   └── Footer.jsx, ThemeToggle.jsx
│   ├── pages/                   # Home.jsx, NotFound.jsx
│   ├── lib/utils.js             # cn() helper (clsx + tailwind-merge)
│   ├── App.jsx                  # routes (react-router-dom)
│   ├── main.jsx                 # entry point
│   └── index.css                # theme tokens + global styles
├── vite.config.js               # `@/` alias → `src/`
└── vercel.json
```

> Résumé PDFs live in `cv/` (source) and are duplicated under `public/projects/` — only the copy in `public/projects/` is actually served in production (Vite only publishes the contents of `public/`). The download buttons in `AboutSection.jsx` point to `/projects/...`.

## Design system

Neobrutalist look: 2px black borders, hard non-blurred shadows (`shadow-shadow`), near-zero border radius, flat high-contrast palette. The `.dark` theme flips background/border; brand colors (`--main`, `--accent`, `--chart-1..5`) stay fixed across both themes. Theme toggle lives in `ThemeToggle.jsx`, persisted to `localStorage`.

## Customization

- **Projects and skills**: edit the `projects`/`skills` arrays directly in `ProjectsSection.jsx` / `SkillsSection.jsx`, including images under `public/projects/`.
- **Colors/theme**: HSL tokens in `src/index.css` (`:root` / `.dark`) — avoid hardcoded hex/rgb classes.
- **Contact form**: swap the Formspree endpoint in `ContactSection.jsx`.
- **Résumés**: replace the PDFs in both `cv/` and `public/projects/` (keep them in sync — only the latter is served).

## Deployment

Vercel, configured via `vercel.json`: Vite framework, `npm run build`, output `dist/`.

## License

MIT — see [LICENSE](LICENSE).

## Contact

- **Email:** gt.rosati@gmail.com
- **LinkedIn:** [Gabriel Rosati](https://www.linkedin.com/in/gabriel-tb-rosati/)
- **GitHub:** [MuketaUeda](https://github.com/MuketaUeda)

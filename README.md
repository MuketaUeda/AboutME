# Gabriel Rosati — Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

[🌐 Live Demo](https://gabriel-rosati.vercel.app/) · [English version](README.en.md)

</div>

---

## Sobre

Portfólio pessoal single-page em **React + Vite**, com **Tailwind CSS v4** e design **neobrutalista** (bordas grossas, sombras duras, sem gradientes). Suporta tema claro/escuro persistente, formulário de contato funcional (Formspree) e seções de sobre/skills/projetos com conteúdo mantido direto no código.

Sem TypeScript e sem suíte de testes — é um projeto pequeno, single-page.

## Stack

- **React 19** + **React Router** (rota única `index` → Home, `*` → 404)
- **Vite 7** (build/dev server)
- **Tailwind CSS v4** — tokens de tema em `src/index.css`, mapeados no `@theme`
- Componentes de UI adaptados do [neobrutalism-components](https://github.com/ekmas/neobrutalism-components) (convertidos para `.jsx` puro, sem TS)
- **Formspree** para o formulário de contato (sem backend próprio)

## Rodando localmente

```bash
git clone git@github.com:MuketaUeda/AboutME.git
cd AboutME/vite-project
npm install
npm run dev        # http://localhost:5173
```

Outros scripts:

```bash
npm run build      # build de produção em dist/
npm run preview    # preview do build
npm run lint        # ESLint
```

## Estrutura

```
vite-project/
├── cv/                          # PDFs originais dos currículos (fonte)
├── public/
│   ├── favicon.svg
│   └── projects/                # imagens dos projetos + cópia dos PDFs servidos em produção
├── src/
│   ├── components/
│   │   ├── ui/                  # primitivos (Button, Card, Badge, Input, Textarea, Label, Alert)
│   │   ├── NavBar.jsx, HeroSection.jsx, AboutSection.jsx,
│   │   ├── SkillsSection.jsx, ProjectsSection.jsx, ContactSection.jsx,
│   │   └── Footer.jsx, ThemeToggle.jsx
│   ├── pages/                   # Home.jsx, NotFound.jsx
│   ├── lib/utils.js             # helper cn() (clsx + tailwind-merge)
│   ├── App.jsx                  # rotas (react-router-dom)
│   ├── main.jsx                 # entry point
│   └── index.css                # tokens de tema + estilos globais
├── vite.config.js               # alias `@/` → `src/`
└── vercel.json
```

> Os PDFs de currículo ficam em `cv/` (fonte) e duplicados em `public/projects/` — só a cópia em `public/projects/` é servida em produção (o Vite só publica o conteúdo de `public/`). Os botões de download em `AboutSection.jsx` apontam para `/projects/...`.

## Design system

Visual neobrutalista: bordas pretas de 2px, sombras duras sem blur (`shadow-shadow`), raio de borda quase zero, paleta plana de alto contraste. O tema `.dark` inverte fundo/borda; as cores de marca (`--main`, `--accent`, `--chart-1..5`) permanecem fixas nos dois temas. Alternância de tema em `ThemeToggle.jsx`, persistida em `localStorage`.

## Customização

- **Projetos e skills**: editar os arrays `projects`/`skills` direto em `ProjectsSection.jsx` / `SkillsSection.jsx`, incluindo imagens em `public/projects/`.
- **Cores/tema**: tokens HSL em `src/index.css` (`:root` / `.dark`) — não usar hex/rgb direto nas classes.
- **Formulário de contato**: trocar o endpoint do Formspree em `ContactSection.jsx`.
- **Currículos**: substituir os PDFs em `cv/` e em `public/projects/` (mantendo os dois em sincronia, já que só o segundo é servido).

## Deploy

Vercel, configurado via `vercel.json`: framework Vite, `npm run build`, output `dist/`.

## Licença

MIT — veja [LICENSE](LICENSE).

## Contato

- **Email:** gt.rosati@gmail.com
- **LinkedIn:** [Gabriel Rosati](https://www.linkedin.com/in/gabriel-tb-rosati/)
- **GitHub:** [MuketaUeda](https://github.com/MuketaUeda)

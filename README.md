# Portfolio — "Assembly Sheet" design system

A Next.js (App Router) + Tailwind v4 + Framer Motion portfolio, styled like a
technical drawing / furniture-assembly manual: numbered sheets, dimension
lines, exploded parts diagrams for skills, and handwritten margin notes —
tying together a CS/systems background with painting and hands-on building.

## 1. First things to edit

Everything content-related lives in **`lib/data.ts`** — one file, no hunting
through components:

- `site` — your name, tagline, email, LinkedIn, GitHub, resume path
- `skillCategories` — skills grouped by sheet, with a proficiency tag per item
- `projects` — Comubridge, Track-O-Bar, Docnatic, GPS Safety Device (edit or
  add more — each gets its own `/projects/[slug]` case-study page automatically)
- `experience`, `education`, `achievements`, `coursesInProgress`, `hobbies`

Drop your real résumé PDF into `public/resume.pdf` (see
`public/README-resume.txt`) — the download links already point there.

## 2. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Deploy (GitHub + Vercel)

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/idadawala/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com/new, import the repo, keep the default Next.js settings,
   and deploy. Every push to `main` redeploys automatically.

## Design notes

- **Signature element:** the Skills section reads as an instruction-sheet
  parts list (part numbers, proficiency tags) instead of a tag cloud, and
  each project is a numbered case-study "sheet" rather than a static card.
- **Non-linear nav:** press `/` anywhere (or click "Index") to open a
  keyboard-navigable command palette that jumps to any section or project.
- **Two modes:** "Paper" (light, default) and "Blueprint" (dark), toggled top
  right — a nod to actual drafting paper vs. blueprint copies, not a generic
  dark-mode switch.
- **Accessibility:** semantic landmarks, visible focus states, a skip link,
  and `prefers-reduced-motion` respected globally (via `MotionConfig` for
  Framer Motion and a CSS override for everything else).
- Fonts: Fraunces (display/headers), Work Sans (body), Space Mono (part
  numbers, tags, dimension labels), Caveat (handwritten annotations).

## Structure

```
app/
  layout.tsx           fonts, metadata, theme init, skip link
  page.tsx              home page, assembles all sections
  projects/[slug]/      dynamic project case-study pages
  not-found.tsx
components/             one component per section + Nav, CommandPalette, ThemeToggle
lib/data.ts              all editable content
```

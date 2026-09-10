# Adarsh — Portfolio

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's here

**Design system** — dark tokens (`#08090D` / `#0F1117` / `#12151C`), a Space Grotesk + Inter + JetBrains Mono type system, one amber signal accent used sparingly, reduced-motion support (`tailwind.config.ts`, `src/app/globals.css`)

**Sections, in order**: Hero, About, Skills, Journey, Projects, Education, Certifications, GitHub, Resume, Contact — plus a sticky navbar and footer.

**Scroll-driven statement section** (`src/components/sections/Statement.tsx`) — sits between Hero and About. Inspired by a reference clip you shared (a Webflow demo where a solid band sits across the hero text and grows to fill the screen as you scroll, revealing a headline). Rebuilt with Framer Motion's `useScroll`/`useTransform` — no GSAP added — and re-themed to this site's dark surface + amber signal accent instead of the reference's cream/black swap. Falls back to a plain static section under `prefers-reduced-motion`.

**Page-load animation** (`src/components/ui/PageLoader.tsx`) — a full-screen overlay that reveals the name letter by letter, then wipes away. Shows once per browser session (via `sessionStorage`), and collapses to a quick fade under `prefers-reduced-motion` instead of skipping straight to a jump cut.

**Interactive Hero background** (`src/components/ui/SonarField.tsx`) — a canvas dot-grid behind the Hero copy that sends out a quiet ripple on click/tap, plus occasional ambient pings. Built with plain canvas + no new dependency (no GSAP), reads its color from the `signal` token so it stays theme-consistent, pauses off-screen/in hidden tabs, and renders a static grid under `prefers-reduced-motion`.

Editable content lives in `src/data/`: `profile.ts`, `skills.ts`, `journey.ts`, `projects.ts`, `education.ts`, `certificates.ts`.

## Before you deploy

- Add the real resume file at `public/resume.pdf` — the Resume buttons already point there, but the file itself doesn't exist yet.
- Add a favicon at `public/favicon.ico` (referenced in `src/app/layout.tsx`).
- The Projects section has no `githubUrl`/`liveUrl` set for any project yet — add them in `src/data/projects.ts` once repos are public, and the "Code"/"Live demo" buttons on each card will appear automatically.
- The Certifications section has no issue dates or credential URLs — add them in `src/data/certificates.ts` as they become available.
- The Contact section is direct links only (Email, LinkedIn, GitHub) — there's no email backend wired up, so no contact form pretends to submit. `src/components/sections/Contact.tsx` has a comment marking where to add one once a backend exists.
- Nothing here needs internet access except `next/font/google` at build time — if your environment blocks `fonts.googleapis.com`, the build will fail; any normal machine or Vercel deployment can reach it fine.

## `npm run lint`

Runs ESLint directly (`next lint` was removed in Next.js 16).

## A note on what's real vs. what the brief suggested

The original brief's suggested skill list (NumPy, Pandas, Scikit-learn, React, Next.js, FastAPI, RAG, Prompt Engineering), its suggested journey path, and its suggested project category spread are aspirational placeholders — not Adarsh's actual demonstrated experience. Per the brief's own "no fake information" rule:

- **Skills** (`src/data/skills.ts`) list only what's verified: Python, Django, Java, PHP, JavaScript, HTML5/CSS3, Bootstrap, MySQL, PostgreSQL, Git/GitHub/VS Code/XAMPP — plus a separate, visually distinct "currently learning" block for the ML/AI foundations being studied through the KELTRON Data Science & AI course.
- **Journey** (`src/data/journey.ts`) follows the real progression — BCA → Web Development → Full-Stack → Data Science & AI (in progress) — with that last stage marked as in-progress, not complete.
- **Projects** (`src/data/projects.ts`) are the three real ones: EcoCommute (Django), Workshop Registration System (PHP/MySQL), and Face Recognition Attendance System (Python/OpenCV, in progress). The Projects section's category filter only shows categories that actually have a project in them.
- **Certifications** (`src/data/certificates.ts`) list only the names and issuer stated; no dates or credential URLs were invented.
- **Education** (`src/data/education.ts`) has degree, institution, and period only — no invented coursework or highlights.

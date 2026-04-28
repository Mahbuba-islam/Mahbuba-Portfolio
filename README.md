# Mahbuba Akter — Portfolio

[![CI](https://github.com/mahbuba/mahbuba-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/mahbuba/mahbuba-portfolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-149eca?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

The personal portfolio of **Mahbuba Akter** — a Junior Full Stack Web Developer based in New York. Built with the latest Next.js App Router, React Server Components, and Tailwind v4.

> **Live:** [mahbuba.dev](https://mahbuba.dev)

---

## ✨ Highlights

- **Photo-driven theme** — palette is auto-extracted from a profile photo at build time and threaded through CSS variables, so the entire site adapts to whichever image lives in `/public/img/`.
- **MDX + Markdown blog** — frontmatter-powered posts, code highlighting (Prism), reading time, autolinked headings, generated table of contents, related/prev-next, tag pages, search, RSS feed, and per-post OpenGraph images.
- **⌘K command palette** — global search spanning sections, blog posts, tags, and quick actions; arrow-key navigation, instant routing.
- **Print-ready resume** — dedicated `/resume` page with print stylesheet (`@page Letter`, hidden chrome, color-corrected) — save to PDF in one click.
- **Polished interactions** — Framer Motion animations, 3D-tilt project cards, subtle radial palette glows, and accessible focus states.
- **Stats endpoint** — file-backed view + like counter for blog posts, with optimistic UI.
- **Type-safe everywhere** — strict TypeScript, Zod-validated API inputs, ESLint clean.
- **End-to-end tested** — Playwright smoke tests for homepage, command palette, blog, resume, and API routes.
- **SEO baked in** — metadata, OpenGraph, JSON-LD (Person + BlogPosting), `sitemap.xml`, `robots.txt`, RSS.

---

## 🧱 Tech Stack

| Layer       | Stack                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack), React 19                                                         |
| Language    | TypeScript 5 (strict)                                                                                |
| Styling     | Tailwind CSS v4, ShadCN UI, `tw-animate-css`, `@tailwindcss/typography`                              |
| Animation   | Framer Motion                                                                                        |
| Content     | Markdown / MDX (`gray-matter`, `remark`, `rehype-prism-plus`, `next-mdx-remote/rsc`)                 |
| Validation  | Zod                                                                                                  |
| Email       | Resend                                                                                               |
| Theme       | `next-themes` (dark default, system aware)                                                           |
| Palette     | `node-vibrant` extraction at build time                                                              |
| Testing     | Playwright                                                                                           |
| Tooling     | ESLint, `eslint-config-next`, `@playwright/test`                                                     |

---

## 🗂️ Project Structure

```
.
├── app/                     # Next.js App Router
│   ├── api/                 # Route handlers (blog, contact, stats)
│   ├── blog/                # Blog index, [slug], tag pages, OG images
│   ├── components/          # Client + server components
│   ├── resume/              # Printable resume page
│   ├── globals.css          # Tailwind + theme tokens + print styles
│   ├── palette.css          # Auto-generated palette CSS vars
│   ├── layout.tsx           # Root layout, metadata, JSON-LD, palette mount
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   ├── rss.xml/route.ts
│   └── sitemap.ts
├── components/ui/           # ShadCN primitives
├── content/blog/            # Markdown / MDX posts
├── lib/                     # posts, markdown, palette, stats, utils
├── public/                  # Static assets (incl. profile photo)
├── scripts/extract-palette.mjs
├── e2e/                     # Playwright tests
└── .github/workflows/ci.yml # Lint + build + e2e
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 10+**

### Install & run

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The first `dev` and `build` runs the palette extraction step, reading the profile photo from `public/img/` and writing `app/palette.css` + `lib/palette.json`. Drop in a different photo and re-run to retheme the site.

### Environment variables

Optional — create `.env.local`:

```ini
# Public site URL (used in metadata, sitemap, RSS, JSON-LD)
NEXT_PUBLIC_SITE_URL=https://mahbuba.dev

# Resend (for the contact form)
RESEND_API_KEY=re_xxx
RESEND_FROM=onboarding@resend.dev
RESEND_TO=mahbubaislam7010@gmail.com
```

---

## 📜 Scripts

| Script                | What it does                                                            |
| --------------------- | ----------------------------------------------------------------------- |
| `npm run dev`         | Extract palette → start Next.js dev server (Turbopack)                  |
| `npm run build`       | Extract palette → production build                                      |
| `npm run start`       | Start the production server                                             |
| `npm run lint`        | ESLint over the project                                                 |
| `npm run palette`     | Re-run palette extraction (after swapping the profile photo)            |
| `npm run test:e2e`    | Run Playwright e2e tests against a built app                            |
| `npm run test:e2e:ui` | Open Playwright UI mode                                                 |
| `npm run test:e2e:install` | One-time: download Chromium + OS deps for Playwright               |

---

## ✍️ Authoring Blog Posts

Posts live in `content/blog/` as `.md` or `.mdx`. Frontmatter:

```yaml
---
title: "Getting Started with Next.js"
description: "A practical introduction to the App Router."
date: "2026-04-01"
tags: ["nextjs", "guide"]
---
```

- `.md` files are rendered through `remark` + `rehype` (with Prism syntax highlighting and autolinked headings).
- `.mdx` files are rendered through `next-mdx-remote/rsc` and can use the components defined in [`app/components/mdx-components.tsx`](app/components/mdx-components.tsx).
- A reading-time estimate, table of contents, related posts, and prev/next navigation are generated automatically.

---

## 🎨 Theming from a Photo

`scripts/extract-palette.mjs` walks `/public`, picks the first JPG/PNG/WEBP it finds, and uses [`node-vibrant`](https://github.com/Vibrant-Colors/node-vibrant) to write six CSS custom properties (`--palette-vibrant`, `--palette-light-vibrant`, `--palette-dark-vibrant`, plus muted variants) into `app/palette.css`. Those variables drive the hero gradient ring, name gradient, accent rings, and `::selection` color.

To retheme, replace the photo in `public/img/` and re-run `npm run palette` (or any build).

---

## 🧪 Testing

```powershell
npm run test:e2e:install   # one-time
npm run build
npm run test:e2e
```

Suites under [`e2e/`](e2e/):

- **`home.spec.ts`** — hero, section anchors, ⌘K palette routes to `/resume`.
- **`blog.spec.ts`** — blog index, post page, RSS xml, sitemap contents.
- **`resume.spec.ts`** — resume page sections, contact links, print button.
- **`api.spec.ts`** — `/api/blog` JSON shape, `/robots.txt`.

CI runs all of these on every PR via [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

---

## 🚢 Deploying to Vercel

This project is fully configured for Vercel — there is a [`vercel.json`](vercel.json) with security headers and the right framework preset.

### 1. Push to GitHub

```bash
git add -A
git commit -m "ready for deploy"
git push
```

### 2. Import into Vercel

1. Go to https://vercel.com/new
2. **Import Git Repository** → pick this repo.
3. Framework preset is auto-detected as **Next.js**. Leave the defaults.
4. **Do not deploy yet** — first add the environment variables (next step).

### 3. Environment variables

In the Vercel **Configure Project** screen (or later in **Settings → Environment Variables**), add:

| Key                    | Value                                              | Environments         |
| ---------------------- | -------------------------------------------------- | -------------------- |
| `RESEND_API_KEY`       | `re_...` from https://resend.com/api-keys           | Production, Preview  |
| `CONTACT_TO_EMAIL`     | `mahbubaislam7010@gmail.com`                       | Production, Preview  |
| `CONTACT_FROM_EMAIL`   | `Portfolio <onboarding@resend.dev>` (or your verified domain) | Production, Preview  |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` (set after deploy) | Production           |

> **Note:** the default `onboarding@resend.dev` from-address only delivers to the email you signed up to Resend with. To send to *any* address, verify your domain at Resend → Domains and update `CONTACT_FROM_EMAIL`.

### 4. Deploy

Click **Deploy**. The build runs `prebuild` (palette extraction) then `next build`.

### 5. After first deploy

1. Update `NEXT_PUBLIC_SITE_URL` to the actual deployed URL (or your custom domain).
2. Click **Redeploy** so the sitemap, RSS, and OG tags pick up the new origin.

### Optional: Custom domain

Vercel → Project → **Settings → Domains** → add your domain and follow the DNS instructions. Then update `NEXT_PUBLIC_SITE_URL` to match.

The build step automatically extracts the palette, so the deployed site is themed from your committed photo.

---

## 🗺️ Routes

| Route                    | Purpose                                |
| ------------------------ | -------------------------------------- |
| `/`                      | Homepage (hero, about, skills, projects, latest posts, contact) |
| `/resume`                | Printable resume                       |
| `/blog`                  | Blog index with search + tag cloud     |
| `/blog/[slug]`           | Individual post (Markdown or MDX)      |
| `/blog/tag/[tag]`        | Posts filtered by tag                  |
| `/api/blog`              | JSON list of posts                     |
| `/api/contact`           | Contact form (Resend)                  |
| `/api/stats/[slug]`      | View + like counter                    |
| `/sitemap.xml`           | Sitemap                                |
| `/robots.txt`            | Robots                                 |
| `/rss.xml`               | RSS feed                               |

---

## 📫 Contact

- **Email:** [mahbubaislam7010@gmail.com](mailto:mahbubaislam7010@gmail.com)
- **Location:** New York, NY
- **Website:** [mahbuba.dev](https://mahbuba.dev)

---

## License

[MIT](LICENSE) © Mahbuba Akter

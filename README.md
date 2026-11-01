# Rory Barrett: personal website

A fast, static portfolio site built with [Astro](https://astro.build). Content lives in Markdown/MDX and TypeScript data files, so updating the site means editing text files, not code.

- **Home**: a story-style introduction: who I am, what I do, how I work, what I'm doing now, and how to get in touch
- **Work**: every project, filterable by Engineering / Data, each with its own case-study page
- **About**: bio, the work I want, experience timeline, skills, education, optional CV download
- **Lab**: hobbies and side projects (hidden from the menu until it has at least one entry)
- **Contact**: LinkedIn and GitHub, plus an optional form and email

## Running it locally

Requires Node 22.23.4 or newer.

```bash
npm install
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # type-checks and builds to dist/
npm run preview    # serves the built site
```

## Editing content

| What | Where |
| --- | --- |
| Name, tagline, location, email, social links | `src/data/site.ts` |
| Experience, education, skills, goals | `src/data/experience.ts` |
| Personal intro, how I work, "Now" section, What I do areas | `src/data/profile.ts` |
| Home and About headline/intro copy | `src/pages/index.astro`, `src/pages/about.astro` |
| Projects | `src/content/projects/*.mdx` |
| Hobbies & side projects | `src/content/lab/*.mdx` |
| CV download | put a PDF in `public/` (e.g. `public/cv.pdf`) and set `cvPath: '/cv.pdf'` in `src/data/site.ts` |
| Social preview image | replace `public/og-default.png` (1200×630) |

### Adding a project

Create `src/content/projects/my-project.mdx`. The filename becomes the URL (`/work/my-project`).

```mdx
---
title: My project
summary: One sentence shown in lists and search results.
date: 2026-01-15
role: Lead engineer
category: analytics-engineering   # or: data-science, bi
period: 2024–2025       # optional, shown instead of the year
tags: [Web app]
stack: [TypeScript, React]
featured: true          # show on the home page
order: 1                # lower = earlier in lists
cover: ./images/my-project.png   # optional, relative to this file
coverAlt: Screenshot of the dashboard
links:
  repo: https://github.com/you/my-project
  demo: https://my-project.example.com
  notebook: https://github.com/you/my-project/blob/main/analysis.ipynb
draft: false            # true hides it from the live site
---

import Stats from '../../components/Stats.astro';

## The problem
...

<Stats items={[{ value: '3×', label: 'faster builds' }]} />
```

Markdown tables, code blocks, blockquotes and images are all styled. Lab entries work the same way, with `status: active | paused | shipped` instead of `category`. The `/lab` page doesn't exist until there's an entry. Adding the first one creates it and puts Lab back in the menu and the sitemap.

### Contact form

1. Sign up at [formspree.io](https://formspree.io) and create a form.
2. Copy its ID (the part after `/f/` in the endpoint URL) into `formspreeId` in `src/data/site.ts`.
3. Submit a test message from the live site and confirm the email arrives.

The form and your email are hidden while `formspreeId` and `email` in `src/data/site.ts` are empty.

## Deploying: GitHub Pages + Cloudflare

### 1. GitHub Pages

1. Create a GitHub repository. Naming it `<your-github-username>.github.io` means it's served at the root of that domain.
2. Push this project to the `main` branch.
3. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Every push to `main` now builds and deploys via `.github/workflows/deploy.yml`.
5. Set `site` in `astro.config.mjs` to the URL the site is served from (used for the sitemap and social previews).

If the repository has any other name, the site is served from `https://<user>.github.io/<repo>/`, and links will break unless you use a custom domain (below) or add `base: '/<repo>'` to `astro.config.mjs`.

### 2. Custom domain on Cloudflare (optional)

1. Add your domain to Cloudflare (or buy it through Cloudflare Registrar).
2. Create `public/CNAME` containing just your domain, e.g. `rorybarrett.com`, and update `site` in `astro.config.mjs`.
3. In GitHub **Settings → Pages → Custom domain**, enter the same domain.
4. In Cloudflare **DNS**, add:

   | Type | Name | Content | Proxy |
   | --- | --- | --- | --- |
   | A | `@` | `185.199.108.153` | DNS only |
   | A | `@` | `185.199.109.153` | DNS only |
   | A | `@` | `185.199.110.153` | DNS only |
   | A | `@` | `185.199.111.153` | DNS only |
   | CNAME | `www` | `<your-github-username>.github.io` | DNS only |

5. Wait for GitHub to show the domain as verified and issue a certificate, then tick **Enforce HTTPS**.
6. Optionally switch the records to **Proxied** (orange cloud) for Cloudflare's CDN. If you do, set **SSL/TLS → Overview** to **Full** to avoid redirect loops.

## Project structure

```
src/
  components/    reusable UI (header, footer, project rows, cards, form...)
  content/       projects/ and lab/ Markdown/MDX entries
  data/          site settings and CV data
  layouts/       BaseLayout: <head>, header, footer
  lib/           content helpers (sorting, labels, dates)
  pages/         one file per route
  styles/        global.css: design tokens, typography, prose styles
public/          files served as-is (CV, favicon, social image)
```

Design tokens (colours, fonts, spacing) are CSS custom properties at the top of `src/styles/global.css`.

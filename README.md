# sapnilpatel.github.io

Personal site of **Sapnil Patel** — AI Engineer. Live at [sapnilpatel.github.io](https://sapnilpatel.github.io).

Astro 5 + Tailwind 4, statically built, deployed to GitHub Pages via Actions on every push to `main`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit content

All copy lives in [`src/data/site.ts`](src/data/site.ts) — profile, roles, projects, skills. Edit that one file; every section updates.

## Structure

```
src/
  data/site.ts             ← all content
  layouts/Base.astro       ← head, SEO, JSON-LD
  components/
    Terminal.astro         ← interactive hero terminal
    SamplingDemo.astro     ← next-token sampling playground
  pages/index.astro        ← the page
  styles/global.css        ← design tokens + theme
```

## Hosting portability

Nothing here is GitHub-Pages-specific: `npm run build` emits plain static files in `dist/`. To move to Cloudflare Pages / Netlify / Vercel, point them at the repo with build command `npm run build` and output dir `dist`.

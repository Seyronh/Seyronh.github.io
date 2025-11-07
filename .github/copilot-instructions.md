## Copilot instructions — Seyronh.github.io

These short, focused rules help an AI coding agent be productive immediately in this Astro site.

1. Project type & purpose
   - This is a static Astro site using `astro` v5. See `package.json` scripts. It's a portfolio/site (no server-side API). Primary entry is `src/pages/`.

2. Key commands (run from repo root)
   - Install: `npm install`
   - Dev: `npm run dev` (starts Astro dev server)
   - Build: `npm run build` (produces `dist/`)
   - Preview built site: `npm run preview`
   - Format check: `npm run format` (Prettier)

3. Architecture & conventions (what to edit)
   - Pages: `src/pages/*.astro` -> each file maps to a route. Example: `src/pages/index.astro` is home.
   - Layouts: `src/layouts/*` contain site templates. Example: `src/layouts/paginabase.astro` provides the HTML skeleton and a `slot name="head"` used by pages.
   - Components: `src/components/` for reusable pieces. Example: `src/components/Comun/SEOBase.astro` wraps `astro-seo` and is used by pages to set meta tags.
   - Assets: `src/assets/` (images, icons). The default og image is imported in `SEOBase.astro` as `@assets/logotipo.webp`.

4. TypeScript & path aliases
   - `tsconfig.json` defines aliases: `@components/*`, `@assets/*`, `@layouts/*`. Use these imports throughout the codebase (e.g. `import SEOBase from "@components/Comun/SEOBase.astro"`).

5. Integrations & third-party behaviors to be aware of
   - See `astro.config.mjs` for active integrations: `@astrojs/partytown`, `@astrojs/sitemap`, `astro-robots-txt`, `astro-min`, and `@playform/*` plugins. These affect build output and optimization.
   - Site URL is set in `astro.config.mjs` (site: `https://seyronh.github.io`). Keep canonical/OG URLs consistent with this value.

6. Patterns & examples for small edits
   - Adding page metadata: use `SEOBase` in a page and supply `slot="head"`. Example in `src/pages/index.astro`:
     - <slot head> populated by `<SEOBase titulo="Home" description="Portfolio Seyronh" canonical="https://seyronh.github.io/" />`.
   - OG images: `SEOBase` expects `ogImage` to be either an absolute URL or a relative asset; it resolves relative paths using the page's `canonical` prop.

7. What not to change lightly
   - `astro.config.mjs` integrations and minification settings — they alter build output. If you change them, validate `npm run build` and `npm run preview` locally.
   - The `site` value in the config; many SEO and canonical URLs depend on it.

8. Testing / validation
   - There are no unit tests in the repo. Validate changes by running `npm run dev` for quick feedback and `npm run build` + `npm run preview` to check production output.
   - Lint/format: `npm run format` uses Prettier (with `prettier-plugin-astro`).

9. Quick debugging tips
   - If imported path aliases fail in the editor, ensure `tsconfig.json` paths are respected by the editor/IDE (restart TS server if needed).
   - For missing images or wrong OG URLs, inspect `SEOBase.astro` where `ogImage` resolution occurs (search for `new URL(ogImage, canonical)`).

10. When adding features
    - Keep everything in `src/` and follow existing layout/component split.
    - For new integrations, add the integration to `astro.config.mjs` and run a full build to verify output.

If anything in this doc is unclear or you want examples added (e.g., how to add a new page with metadata, or how to change integrations safely), tell me which section to expand and I will iterate.

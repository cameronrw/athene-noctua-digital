# AI Agent Instructions for Athene Noctua Digital

This is a bilingual Astro website (English/Greek) using Astro's native i18n.

## Build and Development

- Start dev server: `npm run dev`
- Build for production: `npm run build` (includes TypeScript check)
- Preview build: `npm run preview`

## Architecture

- Multilingual routing: /en/* and /el/* 
- Pages in src/pages/en/ and src/pages/el/
- Content in src/content/en/ and src/content/el/
- Shared layout: src/layouts/Layout.astro
- Components: src/components/

## Conventions

- Always pass `locale` prop through component tree
- Use `getRelativeLocaleUrl(locale, path)` for navigation links
- Create parallel files for both locales when adding pages/content

For more details, see [README.md](README.md)
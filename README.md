# Athene Noctua Digital

A bilingual Astro website for English and Greek content.

## 🚀 About this project

- Built with Astro `^4.11.3`
- Uses Astro's built-in i18n support
- Default locale is `en` with locale-prefixed routing (`/en/*` and `/el/*`)
- Root `/` redirects to `/en/`

## 📁 Project structure

```text
/
├── public/              Static assets
├── src/
│   ├── components/      Reusable UI components
│   │   └── Header.astro
│   ├── layouts/         Shared page layout
│   │   └── Layout.astro
│   ├── content/         Localized markdown content
│   │   ├── en/
│   │   └── el/
│   └── pages/           Localized pages
│       ├── en/
│       └── el/
└── package.json
```

## 🌐 Localization

- English pages live under `src/pages/en/`
- Greek pages live under `src/pages/el/`
- The header uses `getRelativeLocaleUrl` from `astro:i18n` to generate locale-aware links
- Each page passes `locale` into `Layout.astro` so the site can render the correct language and navigation state

## 🚧 Scripts

Run these commands from the project root:

```sh
npm install
npm run dev
npm run build
npm run preview
```

- `npm install` installs dependencies
- `npm run dev` starts the Astro development server
- `npm run build` runs `astro check` and builds the production site
- `npm run preview` previews the built site locally

## 🔧 Notes

- `astro.config.mjs` configures `i18n` with `defaultLocale: "en"` and `locales: ["en", "el"]`
- Static assets should go in `public/`
- Add new localized pages by creating matching files in both `src/pages/en/` and `src/pages/el/`

## 📚 Learn more

- Astro docs: https://docs.astro.build
- Astro i18n docs: https://docs.astro.build/en/guides/internationalization/

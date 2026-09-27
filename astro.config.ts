import { defineConfig, fontProviders } from "astro/config";
import { languages } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: languages.map(({ locale }) => locale),
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": "/en/",
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
    },
  ],
});

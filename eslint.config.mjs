import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  { ignores: [".astro/**", "src/env.d.ts"] },
  ...eslintPluginAstro.configs.recommended,
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx,mts,cts}"],
  })),
];

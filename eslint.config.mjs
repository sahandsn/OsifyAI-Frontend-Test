import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  // Next.js core-web-vitals presets (already includes @typescript-eslint)
  ...nextVitals,

  // TypeScript-specific tweaks
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      // Disable base rule; rely on TS-aware one
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
      ],
    },
  },

  // Ignores (flat config style)
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/client/**",
      "src/components/ui/**",
      "src/lib/cached-blogs.ts",
      "src/types/api-swagger.d.ts",
    ],
  },
]);

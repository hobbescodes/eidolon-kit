import { preset } from "@eidolonkit/tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./docs/**/*.{html,md,mdx,tsx}",
    "../../packages/ui/dist/**/*.mjs",
  ],
  darkMode: "class",
  presets: [preset],
  parkUI: {
    accentColor: "mint",
    grayColor: "sage",
  },
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
};

export default config;

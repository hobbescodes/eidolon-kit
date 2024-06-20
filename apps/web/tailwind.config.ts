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
      animation: {
        rotate: "rotate 10s linear infinite",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(360deg) scale(10)" },
        },
      },
    },
  },
};

export default config;

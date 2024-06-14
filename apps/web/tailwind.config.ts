import { preset } from "@eidolonkit/tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}", "../../packages/ui/dist/**/*.mjs"],
  darkMode: "class",
  presets: [preset],
  parkUI: {
    accentColor: "mint",
    grayColor: "sage",
  },
};

export default config;

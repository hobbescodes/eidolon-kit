import { preset } from "@eidolonkit/tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  presets: [preset],
};

export default config;

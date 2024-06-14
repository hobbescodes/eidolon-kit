import { parkwindPlugin } from "@park-ui/tailwind-plugin";

import type { Config } from "tailwindcss";

export const preset: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  plugins: [parkwindPlugin],
  darkMode: "class",
};

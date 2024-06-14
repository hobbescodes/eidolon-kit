import { parkwindPlugin } from "@park-ui/tailwind-plugin";

import type { Config } from "tailwindcss";

export const preset: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  plugins: [
    {
      config: parkwindPlugin.config ?? {},
      handler: parkwindPlugin.handler,
    },
  ],
};

import { defineConfig } from "vocs";

export default defineConfig({
  description: "This is the documentation site for the Ponder App",
  title: "Ponder App",
  sidebar: [
    {
      text: "Getting Started",
      link: "/",
    },
    {
      text: "Common Workflows",
      link: "/common-workflows",
    },
    {
      text: "Common Issues",
      link: "/common-issues",
    },
  ],
  theme: {
    accentColor: "#86ead4",
  },
  markdown: {
    code: {
      themes: {
        light: "catppuccin-mocha",
        dark: "catppuccin-mocha",
      },
    },
  },
});

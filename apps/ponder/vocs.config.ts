import { defineConfig } from "vocs";

export default defineConfig({
  description: "This is the documentation site for the Ponder App",
  title: "Ponder App",
  sidebar: [
    {
      text: "Getting Started",
      link: "/",
    },
  ],
  theme: {
    accentColor: "#86ead4",
  },
});

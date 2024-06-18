import { defineConfig } from "vocs";

export default defineConfig({
  description: "This is the documentation site for the Web App",
  title: "Web App",
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

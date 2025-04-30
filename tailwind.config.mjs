import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF",
        secondary: "#121212",
        accent: "#0D2563",
        text: "#353755",
        "dk-primary": "#282828",
        "dk-secondary": "#9d64d3",
        "dk-accent": "#c9a5e7",
        "dk-text": "#f5f5f5",
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
};

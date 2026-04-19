import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        apricot: {
          DEFAULT: "#E8721A",
          light: "#F5A65B",
          pale: "#FDF0E6",
          deep: "#C45A0A",
        },
        earth: {
          DEFAULT: "#2C1810",
          mid: "#5C3D2E",
          light: "#8B6355",
        },
        cream: {
          DEFAULT: "#FAF5EE",
          dark: "#F0E8D8",
        },
        leaf: {
          DEFAULT: "#3B6B2A",
          light: "#6A9E56",
        },
        stone: {
          DEFAULT: "#8C8078",
          light: "#B8AFA8",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

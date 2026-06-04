import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        herspace: {
          brown: "#602c21",
          rose: "#c9a99a",
          "light-rose": "#e8d5ce",
          cream: "#f5efe9",
          warm: "#e8d5ce",
          "dark-brown": "#4a1e15",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

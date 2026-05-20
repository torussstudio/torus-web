import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
   fontFamily: {
  sans: ["Inter", "sans-serif"],
  mono: ["Monos", "monospace"],
  raisonne: ["Raisonne", "sans-serif"],
  megatoya: ["BDMegatoya", "sans-serif"],
},

      colors: {
        cream: "#e8e5df",
        ink: "#1a1a1a",
      },

      letterSpacing: {
        widest2: "0.45em",
        nav: "0.13em",
      },
    },
  },

  plugins: [],
};

export default config;
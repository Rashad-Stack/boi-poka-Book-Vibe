/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#23BE0A",
        "brand-blue": "#59C6D2",
      },

      fontFamily: {
        playfair: ["Playfair"],
        "work-sans": ["Work Sans"],
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
};

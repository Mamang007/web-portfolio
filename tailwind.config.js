/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        snow: {
          100: "#dce5e7",
          200: "#8cb1ce",
          300: "#15212d",
          400: "#070e17",
        },
        forest: {
          100: "#15202b",
          200: "#192734",
          300: "#8899a6",
          400: "#e4e6eb",
        },
        fontFamily: {
          logo: ["Bebas Neue", "sans-serif"],
          title: ["Lato", "sans-serif"],
          desc: ["Montserrat", "sans-serif"],
          role: ["Montserrat Alternates", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
  darkMode: ["class"],
};

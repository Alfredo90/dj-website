/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      beau: ["Beau Rivage", "cursive"],
    },
    colors: {
      black: "#444444",
      "retro-red": "#F30067",
    },
    extend: {},
  },
  plugins: [],
};

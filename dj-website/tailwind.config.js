/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      pacifico: ["Pacifico", "cursive"],
      beau: ["Beau Rivage", "cursive"],
      // neon: ["Neon Lights"]
    },
    colors: {
      black: "#444444",
    },
    extend: {},
  },
  plugins: [],
};

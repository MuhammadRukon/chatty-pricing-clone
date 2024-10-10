/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: '"Rubik", sans-serif',
      },
      colors: {
        slate: "#49687e",
        slateLight: "#83a1b7",
        purple: "#b78deb",
        purpleLight: "#f7f5fb",
      },
    },
  },
  plugins: [],
};

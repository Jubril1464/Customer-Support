/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4C6FFF",
        fontColor: "#27272E",
      },
      fontFamily: {
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};

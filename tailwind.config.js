/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#4C6FFF",
        secondaryColor: "#E1E8FF",
        borderColor: "#E2E8F0",
        fontColor: "#27272E",
      },
      fontFamily: {
        inter: ["Inter", "san-serif"],
      },
      gridTemplateColumns: {
        "20": "repeat(20, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};

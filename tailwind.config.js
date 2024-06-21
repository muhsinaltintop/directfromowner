/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d9b061",
        secondary: "#d9c4a9",
        third: "#d8d0c5",
        fourth: "#8d6f57",
        fifth: {
          DEFAULT: "#3f0d0c",
          500: "#3f0d0c80",
        },
      },
    },
  },
  plugins: [],
};

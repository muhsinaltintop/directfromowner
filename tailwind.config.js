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
        primary: "#ffffff",
        secondary: "#d9c4a9",
        third: "#d8d0c5",
        fourth: "#8d6f57",
        fifth: {
          DEFAULT: "#2578f6",
          500: "#2578f675",
        },
      },
    },
  },
  plugins: [],
};

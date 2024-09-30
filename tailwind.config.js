/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Lora", "sans-serif"],
        text: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: "#7DBCC2",
        secondary: "#FCFCFC",
        accent: "#FFB5A7",
        dark: "#3C3C3C",
        highlight: "#CFF1E3",
      },
    },
  },
  plugins: [],
};

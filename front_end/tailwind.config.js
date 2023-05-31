/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     gridRowEnd:{
      sm: "span 26",
      md: "span 36",
      lg: "span 46",
     }
    },
  },
  plugins: [],
};

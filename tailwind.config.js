/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      spacing: {
        30: "120px",
        150: "600px",
      },
    },
  },
  plugins: [],
};

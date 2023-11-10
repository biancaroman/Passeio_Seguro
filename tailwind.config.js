/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        "blue-800": "#232740",
      },
      screens: {
        mlarge: "425px",
        lplarge: "1440px",
      },
      minWidth: {
        "1/2": "50%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      gridTemplateColumns: {
        "2": "repeat(2, minmax(50%, 50%))",
      },
    },
  },
  plugins: [],
};
/**22223334

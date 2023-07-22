/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F2F3F7",
        "black-100": "#444",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        box: "calc(100% - 300px)",
        "col-2": "calc(50% - 20px)",
        "col-3": "calc(33% - 20px)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "810px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        yellowPage: {
          up: "#f8c20d",
          down: "#b9910a",
        },
        blackOpacity: {
          10: "#0000001A",
          20: "#00000033",
          30: "#0000004D",
          40: "#00000066",
          50: "#00000080",
          60: "#00000099",
          70: "#000000B3",
          80: "#000000CC",
          90: "#000000E6",
        },
      },
    },
  },
  plugins: [],
};

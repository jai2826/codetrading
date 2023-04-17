module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        128: "32rem",
      },
      height: {
        128: "32rem",
        22: "5.5rem",
        18: "4.5rem",
      },
      width: {
        w22: "22%",
        w45: "45%",
        w30: "30%",
      },
      spacing: {
        18: "4.5rem",
      },
      fontFamily:{
        'source-code': ['Source Code Pro']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
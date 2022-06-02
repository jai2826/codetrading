module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
        '22':'5.5rem',
        '18':'4.5rem',
      },
      width: {
        'w22':'22%',
      }
    },
  },
  plugins: [],
}
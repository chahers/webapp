/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(167, 211, 243)',   // Soft Sky Blue
        secondary: 'rgb(26, 60, 87)',    // Deep Navy
        surface: 'rgb(217, 224, 230)',   // Cool Gray
        background: 'rgb(255, 255, 255)' // Pure White
      },
    },
  },
  plugins: [],
}

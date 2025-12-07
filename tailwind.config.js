/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077CC',
        primaryDark: '#005fa3',
        accent: '#00AACC',
        softBg: '#F6F9FC'
      }
    },
  },
  plugins: [],
}
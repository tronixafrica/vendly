/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0055D4',
        secondry: '#4F4F4F',
        tetiary: '#2B2B2B',
        nursery: '#033580'

      },
      fontFamily: {
        'Raleway': ['Raleway'],
        'Poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3B82F6',
          teal: '#14B8A6'
        }
      },
      fontFamily: {
        sans: ['Tahoma', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
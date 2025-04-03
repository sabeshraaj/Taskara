/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#4B4B40',
          DEFAULT: '#897B63',
          light: '#C4B7A6',
          lighter: '#E5DED5',
        }
      }
    },
  },
  plugins: [],
};
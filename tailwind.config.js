/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}


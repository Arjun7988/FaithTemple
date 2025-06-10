/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#e0e7f4',
          200: '#c1cfe8',
          300: '#a2b7dc',
          400: '#839fd0',
          500: '#6487c4',
          600: '#516c9d',
          700: '#3d5176',
          800: '#29364f',
          900: '#141b27',
        },
        maroon: {
          50: '#fdf2f2',
          100: '#fde4e4',
          200: '#fbc5c5',
          300: '#f9a6a6',
          400: '#f78787',
          500: '#f56868',
          600: '#c45353',
          700: '#933e3e',
          800: '#622929',
          900: '#311515',
        },
      },
    },
  },
  plugins: [],
};
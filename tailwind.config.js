/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03C0BA',
          opacity: '#03C0BAd4',
          ligth: '#04d4cd',
          300: '#00a09b',
          400: '#008883',
        },
        secondary: {
          DEFAULT: '#231B65',
          opacity: '#231B65d4',
          ligth: '#453c9b',
          300: '#392d9d',
          400: '#2d2482',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};

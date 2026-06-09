/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#fdf7ed',
          200: '#faf0e0',
          300: '#f5e6d3',
          400: '#edd5b7',
          500: '#e0c19c',
          600: '#d4a574',
          700: '#b8834e',
          800: '#9a693c',
          900: '#7d5534',
        },
        warm: {
          50: '#fdf9f3',
          100: '#fbf2e4',
          200: '#f7e5cc',
          300: '#f0d3a8',
          400: '#e8bc7d',
          500: '#dda155',
          600: '#c9883a',
          700: '#a76d31',
          800: '#88582d',
          900: '#704828',
        },
        ink: {
          50: '#f7f5f3',
          100: '#ede9e3',
          200: '#dbd2c8',
          300: '#c4b6a6',
          400: '#a89884',
          500: '#8c7b68',
          600: '#6b5b4f',
          700: '#56483f',
          800: '#4a3728',
          900: '#3d2e21',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

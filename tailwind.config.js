/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif']
    },
    extend: {
      'colors': {
        'primary': '#E2B714',
        'secondary': '#d4ac13',
        'background': '#323437',
        'utility': '#eb7814'
      }
    },
  },
  plugins: [],
}


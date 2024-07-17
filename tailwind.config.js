/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'lalezar':"lalezar"
      },
      screens:{
        'mobile':'375px',
        'desktop':'1240px',
      }
    },
  },
  plugins: [],
  darkMode:"class"
}


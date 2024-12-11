/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgoundco': '#0f172a',
        'backgoundco2': '#1b2447',
        'primary': '#5952AE',
        'hover-color':'#1a3153'
        

    }
    },
  },
  plugins: [],
}
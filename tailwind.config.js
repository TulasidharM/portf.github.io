/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto Mono','mono'],
        poppins:['Poppins'],
        cedarville:["Cedarville Cursive", 'cursive']
      }
    },
  },
  plugins: [],
}
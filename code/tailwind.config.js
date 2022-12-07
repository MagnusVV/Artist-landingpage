/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
],
  theme: {
    fontFamily: {
      'sans':['"noto-sans"', 'sans-serif']
    },
    extend: {
      colors: {
        "primary":"#9F824A",
        "secundary":"#45292A",
        "tertiary":"#090809",
        "link-color":"#234A57",
      }
    }, 
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      red: colors.red,
      'buffer': 'rgb(63 63 63)'
    },
    extend: {
      backgroundImage: {
        'wallpaper-canyon': "url('../images/canyon-gc68bd4159_1280.jpg')",
        'wallpaper-aqua' : "url('../images/crystal-gaffffb578_1920')",
        'cuivre-natif': "url('../images/depositphotos_2849702-stock-photo-native-copper')",
      },
    },
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {zIndex: {

      '-10': '-10',
     }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

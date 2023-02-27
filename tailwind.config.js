/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './public/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#7f7770',
          200: 'rgba(127, 119, 112, 0.7)',
        },
        secondary: {
          100: '#deb37e',
        },
        heading: {
          100: '#e2a355',
          200: '#c3bfbc',
        },
        darkText: {
          100: '#54524f',
          200: '#b5b4b3',
        },
        text: {
          100: '#7f7770',
        },
      },
      fontFamily: {
        openSans: ['Open Sans']
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%,59%)',
        darkBlue: 'hsl(288, 39%, 23%)',
        veryDarkBlue:'hsl(233, 12%, 13%)',
        veryPaleRed:'hsl(13, 100%, 96%)',
        veryLightGray:'hsl(0,0%, 98%)',
        darkGrayishBlue:'hsl(227, 12%, 61%)',
        brightRedSupLight:'hsl(12, 88%,95%)',
        mango: 'rgb(255,191, 52)'

      }
    },
  },
  plugins: [],
}

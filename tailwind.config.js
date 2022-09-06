/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkBlue: 'hsl(240, 100%, 50%)',
        LightBlue: 'hsl(240, 100%, 50%)',
        DarkRed:'hsl(0, 100%, 50%)',
        LightRed:'hsl(330, 100%, 50%)'
      }
    },
  },
  plugins: [],//Installing
}

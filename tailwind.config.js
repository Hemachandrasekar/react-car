/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'plus-jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif']
    },
    extend: { colors: {
      'blue-500': '#3563E9',
      'blue-300': '#5CAFFC',
      'blue-100': '#95A7CB',
      'blue-50': '#C3D4E9',
      'gray-900': '#1A202C',
      'gray-800': '#424B5D',
      'gray-700': '#3D5278',
      'gray-500': '#556987',
      'gray-400': '#91A3BF',
      'red-400': '#ED3F3F',
      'yellow-400': '#FCAD39',
      'secondary-100': '#F3F5F7',
      'white-200': '#F6F7F9',
      'white-100': '#F7F9FC',
      'white-0': '#FFFFFF',
      'black-300': '#131313',
      'overlay-black': 'rgba(0, 0, 0, 0.3)',
          },
  },
  },
  plugins: [],
}


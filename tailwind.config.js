/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          primary: '#212529',
          secondary: '#6c757d',
          gray: '#EEEEEE'
        }
      },
      aspectRatio: {
        'video1': '1120 / 550'
      },
    },
  },
  plugins: [],
}
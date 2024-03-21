/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  extend: {
    fontFamily: {
      roboto: ["Roboto"]
    },
  },
  theme: {
    backgroundColor: {
      'blue': 'rgba(23,86,118,1)',
      'skyblue': '#78C0E0',
      'red': 'rgba(125,29,63,1)',
      'green': '#0CCA4A',
      'yellow': '#FFA400',
      'white': '#FFFFFF',
      'overlay': 'rgba(0, 0, 0, 0.1)'

    },

    textColor: {
      'blue': 'rgba(23,86,118,1)',
      'skyblue': '#78C0E0',
      'red': 'rgba(125,29,63,1)',
      'green': '#0CCA4A',
      'yellow': '#FFA400',
      'white': '#FFFFFF',
      'overlay': 'rgba(0, 0, 0, 0.1)'

    },

    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'custom-vert': '100% 200%',
      'custom-hori': '200% 100%',
    },
    backgroundImage: {
      'gradient-pink-green-vert': 'linear-gradient(PaleVioletRed, PaleVioletRed 50%, Green 50%, Green)',
      'gradient-pink-green-hori': 'linear-gradient(to right, PaleVioletRed, PaleVioletRed 50%, Green 50%, Green)',
      'gradient-lapislazuli-claret-vert': 'linear-gradient(rgba(125,29,63,1) 50%, rgba(23,86,118,1) 50%)',
      'gradient-lapislazuli-claret-hori': 'linear-gradient(to right, rgba(125,29,63,1) 50%, rgba(23,86,118,1) 50%)',
      'gradient-lapislazuli-claret-diag': 'linear-gradient(to bottom right, rgba(23,86,118,1) 50%, rgba(125,29,63,1) 50%)',
      'gradient-green-yellow-diag': 'linear-gradient(120deg, #0CCA4A  50%, #FFA400 50%)',
      'gradient-yellow-green-diag': 'linear-gradient(60deg, #FFA400  50%, #0CCA4A 50%)',

    },
  },
  plugins: [],
}


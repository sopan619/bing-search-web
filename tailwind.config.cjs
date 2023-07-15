/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        josefin :['Josefin Sans', "sans-serif"],
        fasthand :['Fasthand', 'cursive'],
        rubik :['Rubik Dirt', 'cursive'],
      },
    },
  },
  plugins: [],
};

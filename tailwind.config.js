/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'netflix1': "url('/src/pictures/netflix1.jpg')",
      }
    },

  },


  plugins: [],
}

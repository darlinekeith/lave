/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        lave: {
          ink: "#17313a",
          blue: "#1f78bd",
          sky: "#e7f2f9",
          leaf: "#5a7d46",
          mist: "#f4f6f4",
        },
      },
    },
  },
  plugins: [],
}

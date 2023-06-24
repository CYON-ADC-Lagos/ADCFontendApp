/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CFB471",
        "primary-shade": "#C6A554",
        green: "#039228",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"],
      },
    },
  },
  plugins: [],
};

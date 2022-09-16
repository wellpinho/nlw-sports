/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        bgalaxy: "url('/bg.svg')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 17.08%, #43E7AD 37.33%, #E1D55D 75.33%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.88%)",
      },
    },
  },
  plugins: [],
};

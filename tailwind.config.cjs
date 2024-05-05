/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],


  daisyui: {
    themes: [
      "retro",
      "valentine",
    ],
  },

  plugins: [require("daisyui")],
};

module.exports = config;

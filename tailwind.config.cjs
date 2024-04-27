/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],


  daisyui: {
    themes: [
      {
        pastelLight: {
          "primary": "#F06C9B",
          "secondary": "#B3B3B3",
          "accent": "#5E7A7E",
          "neutral": "#AAC9CE",
          "base-100": "#F9F8F6",
          "info": "#7EA2A8",
          "success": "#86C7B7",
          "warning": "#F2D49B",
          "error": "#F88379",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};

module.exports = config;

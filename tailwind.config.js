/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {},
      colors: {
        primary: {
          DEFAULT: "rgb(41 71 66)",
          // Puedes añadir más tonos si lo deseas
        },
        secondary: "rgb(223 195 164)",
      },
    },
  },
  plugins: [],
};

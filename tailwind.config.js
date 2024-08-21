/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(41 71 66)",
          // Puedes añadir más tonos si lo deseas
        },
        secondary: "rgb(223 195 164)",
        light: "rgba(237, 246, 238, 1)",
      },
    },
  },
  plugins: [],
};

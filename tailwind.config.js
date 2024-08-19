/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(41 71 66 / .5)", // Color azul, por ejemplo
          50: "#ebf8ff",
          100: "#bee3f8",
          // Puedes añadir más tonos si lo deseas
        },
      },
    },
  },
  plugins: [],
};

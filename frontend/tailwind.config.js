/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: "#f1f7ff",
          100: "#d8ecff",
          200: "#b1d9ff",
          300: "#7abfff",
          400: "#3f9aff",
          500: "#1f7ae6",
          600: "#135bb8",
          700: "#0f468f",
          800: "#0d366b",
          900: "#0b2a52",
        },
        sage: {
          100: "#e6f3ef",
          200: "#cbe8df",
          300: "#a3d6c5",
          400: "#7cc4ac",
          500: "#58aa92",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 40px rgba(15, 70, 143, 0.12)",
      },
    },
  },
  plugins: [],
};

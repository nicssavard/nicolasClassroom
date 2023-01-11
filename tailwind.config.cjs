/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        1080: "1920px",
        1440: "2560px",
      },
      colors: {
        gold: {
          50: "#FFFFFF",
          100: "#FEFDFC",
          200: "#F2EDDF",
          300: "#E7DDC2",
          400: "#DBCCA4",
          500: "#D0BC87",
          600: "#C0A55F",
          700: "#A68A41",
          800: "#7E6931",
          900: "#554721",
        },
        green: {
          50: "#87D7E4",
          100: "#76D2E0",
          200: "#55C7D8",
          300: "#34BCD1",
          400: "#29A1B3",
          500: "#218391",
          600: "#1A6570",
          700: "#12474F",
          800: "#081E21",
          900: "#000000",
          light: "#01af84",
          dark: "#12474F",
        },
      },
    },
  },
  plugins: [],
};

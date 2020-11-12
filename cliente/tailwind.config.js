module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Oswald", "sans-serif"],
      // },
      colors: {
        "verde-x": "#17e9d7",

        azul: {
          100: "#f5f5f5",
          200: "#42424242",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",

          800: "#10131a",
          900: "#0c0a20",
        },
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      height: {
        68: "17rem",
        72: "18rem",
        90: "25em",
      },
      width: {
        95: "26rem",
        96: "35rem",
        97: "25em",
      },
    },
  },
  variants: {},
  plugins: [],
};

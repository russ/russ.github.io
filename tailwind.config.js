module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#14213D",
        secondary: "#FCA311",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

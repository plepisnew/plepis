import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.zinc[800],
          DEFAULT: colors.zinc[900],
          dark: colors.zinc[950],
          darker: colors.black,
          foreground: colors.white,
          boundary: colors.zinc[800],
        },
        page: {
          DEFAULT: colors.zinc[950],
          foreground: colors.white,
        },
      },
    },
  },
  plugins: [],
};

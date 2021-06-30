const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          '"ヒラギノ明朝 Pro W3"',
          '"Hiragino Mincho Pro"',
          '"游明朝"',
          '"Yu Mincho"',
          "YuMincho",
          '"ＭＳ Ｐ明朝"',
          '"MS PMincho"',
          "serif",
        ],
      },
      fontSize: {
        xs: ["13px", "1.8"],
        sm: ["14px", "1.8"],
        base: ["18px", "1.8"],
        lg: ["22px", "1.8"],
        xl: ["24px", "1.5"],
        "2xl": ["28px", "1.5"],
        "3xl": ["34px", "1.5"],
        "4xl": ["42px", "1.5"],
      },
      lineHeight: {
        none: "1",
        tight: "1.4",
        snug: "1.6",
        normal: "1.8",
        relaxed: "1",
        loose: "2.3",
      },
      letterSpacing: {
        widest: ".25em",
      },
      colors: {
        "my-transparent": "rgba(0,0,0,0)",
        "my-white": "#ffffff",
        "my-black": "#231815",
        "my-orange": "#b2771f",
        "my-orange2": "#E5C798",
        "my-gray": "#34373A",
        "my-gray2": "#595757",
        "my-gray3": "#C9CACA",
        "my-red": "#A40000",
        "my-teal": "#073354",
        "my-teal2": "#051b34",
        "my-teal3": "#244866",
      },
      screens: {
        md: "480px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clearfix": {
          "::after": {
            content: "",
            clear: "both",
            display: "table",
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};

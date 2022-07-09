module.exports = {
  content: [
    "./src/pages/sections**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ECEBEF",
      superwhite: "#ffffff",
      darkBlue: "#131921",
      primary2: "#232F3E",
      otherBlue: "#37475A",
      orange: "#F15603",
      orange2: "#f08804",
      grey: "#B6B1AD",
      facebook: "#1877F2",
      google: "#EA4335",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      PTSans: "PT Sans, sans-serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

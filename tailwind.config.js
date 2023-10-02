/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#000024",
        poopBrown: "#45050D",
        fancyRed: "#EB2027",
        sunYellow: "#F9EC23",
        weirdYellow: "#C2B917",
        maroon: "#A2393F",
        extraDarkRed: "#470912",
        pale: "#E49F5E",
        blandGrey: "#D9D9D9",
        slightRedBackground: "rgba(160, 59, 64, 0.04)",
        sdOrange: "#FFF5EC",
        udGreen: "#E5F9F7",
        msRed: "#FFEFF0",
        seBlue: "#F1F1FF",
        deYellow: "#FCFBE7",
        scBlue: "#EDF6FF",
        palePink: "#FFE3E5",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      screens: {
        sm: {
          max: "640px",
        }, // small screens
        md: {
          max: "768px"
        }, // medium screens
        lg: {
          max: "1024px"
        }, // large screens
        xl: {
          max: "1280px"
        }, // extra large screens
      },
    },
  },
  plugins: [],
};

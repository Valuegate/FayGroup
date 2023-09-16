/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "darkBlue" : "#000024",
        "poopBrown" : "#45050D",
        "fancyRed" : "#EB2027",
        "sunYellow" : "#F9EC23",
        "maroon": "#A2393F",
        "extraDarkRed" : "#470912",
        "pale" : "#E49F5E",
        "blandGrey" : "#D9D9D9",
      },
      fontFamily: {
        body: ["Poppins"]
      }
    },
  },
  plugins: [],
}

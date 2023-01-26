module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      screens: {},
      spacing: {},
      height: {},
      width: {},
      fontFamily: {},
      fontSize: {},
      maxWidth: {},
      boxShadow: {},
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

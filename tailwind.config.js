const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', serif",
      },
      colors: {
        fontsoft: '#7d7789',
        background: '#f6fbff',
      },
    },
  },
  plugins: [],
};

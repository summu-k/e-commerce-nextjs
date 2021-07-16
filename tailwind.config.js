module.exports = {
  purge: {
    enabled: true,
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/component/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {},
  },
  plugins: [],
};

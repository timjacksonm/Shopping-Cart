module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'default-pattern': "url('./assets/background.jpeg')",
      }),
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
    },
  },
  plugins: [],
};

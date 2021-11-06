module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'azure-mist': '#f0ffff',
        'golden-poppy': '#ffd700',
        'golden-rod': '#daa520'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

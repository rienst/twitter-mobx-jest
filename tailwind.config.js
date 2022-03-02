module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f1f9ff',
          200: '#e3f3fe',
          300: '#c7e6fc',
          400: '#8ecdf8',
          500: '#1d9bf0',
          600: '#1675b4',
          700: '#136296',
          800: '#0f4e78',
          900: '#08273c',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        lg: '0.75rem',
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
      },
    },
  },
  plugins: [],
}

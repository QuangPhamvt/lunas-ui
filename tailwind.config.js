/** @type {import('tailwindcss').Config} */
export default {
  content: ['./packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FDFDFD',
        black: '#111315',
        primary: '#6C70F0',
        'btn-primary-start': '#9EA1FF',
        'btn-primary-end': '#607DE8',
        'btn-secondary-start': '#5E7FF1',
        'btn-secondary-end': '#8FDDFF',
        'btn-destructive-start': '#FF384A',
        'btn-destructive-end': '#FF5463',
        'btn-accept-start': '#2ED573',
        'btn-accept-end': '#7BED9F',
      },
      boxShadow: {
        primary: '0 4px 20px 0 rgba(104, 109, 224, 0.5)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        destructive: '0 10px 10px 0 rgba(255, 56, 74, 0.15)',
        accept: '0 10px 10px 0 rgba(46, 213, 115, 0.15)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

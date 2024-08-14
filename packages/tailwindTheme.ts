export default {
  content: ['./packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ui-white': '#F8F8F8',
        'ui-white-primary': '#FDFDFD',
        'ui-black-primary': '#111315',
        'ui-primary': '#6C70F0',
        'ui-destruction-flat': '#EF4444',
        'ui-positive-flat': '#4ADE80',
      },
      backgroundImage: {
        'ui-btn-primary': 'linear-gradient(180deg, #9EA1FF 0%, #607DE8 100%)',
        'ui-btn-secondary': 'linear-gradient(180deg, #5E7FF1 0%, #8FDDFF 100%)',
        'ui-btn-destructive': 'linear-gradient(282deg, #FF384A 7.07%, #FF5463 92.93%)',
        'ui-btn-accept': 'linear-gradient(282deg, #30C36D 6.81%, #6BCD8A 93.19%)',
      },
      boxShadow: {
        'ui-sd-primary': '0 4px 20px 0 rgba(104, 109, 224, 0.5)',
        'ui-sd-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'ui-sd-destructive': '0 10px 10px 0 rgba(255, 56, 74, 0.15)',
        'ui-sd-accept': '0 10px 10px 0 rgba(46, 213, 115, 0.15)',
        'ui-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
}

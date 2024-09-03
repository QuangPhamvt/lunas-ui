/** @type {import('tailwindcss/types/config').CustomThemeConfig} */
export default {
  colors: {
    ui: {
      white: '#F8F8F8',
      'white-primary': '#FDFDFD',
      'black-primary': '#111315',
      'bg-white': '#F9F9F9',
      primary: {
        50: '#DCE0FA',
        100: '#CED5FB',
        200: '#BEC6F9',
        300: '#A9B2F1',
        400: '#8D96E8',
        DEFAULT: '#6C70F0',
        600: '#6163E1',
        700: '#4C4BBE',
        800: '#272962',
      },
      secondary: {
        50: '#E9D8FC',
        100: '#E1CAFB',
        200: '#D7BAF7',
        300: '#CAA3F1',
        400: '#BA86EB',
        DEFAULT: '#AE54F5',
        600: '#A146E7',
        700: '#8128BE',
        800: '#49126F',
      },
      third: {
        50: '#E4EBF7',
        100: '#D5E3F9',
        200: '#C3D9F9',
        300: '#AFCBF6',
        400: '#96B9EE',
        DEFAULT: '#84B2F8',
        600: '#73A1E5',
        700: '#2C70D5',
        800: '#1D62C6',
      },

      // TEXT COLOR
      'text-primary': '#111315',
      'text-secondary': '#30353C',
      'text-third': '#30353CCC',
      'text-placeholder': '#11131566',
      // 'text-white-primary': '#FDFDFD',
      // 'text-white-secondary': '#FDFDFDCC',
      'text-white-placeholder': '#FDFDFD99',
      'text-black': {
        primary: '#19191B',
        secondary: '#222325',
        third: '#292A2E',
        fourth: '#5F606A',
        placeholder: '#B2B3BD',
      },
      'text-white': {
        primary: '#FCFCFC',
        secondary: '#F9F9F9',
        third: '#D9D9D9',
      },

      // COLOR SPECIAL
      'positive-flat': '#4ADE80',
      'destruction-flat': '#EF4444',
      'neutral-flat': '#BFDBFE',
      rating: '#FDE047',
      input: {
        border: {
          active: '#71717A',
          disabled: '#D4D4D8',
        },
        bg: {
          default: '#FDFDFD',
          error: '#FEF2F2',
        },
      },
    },
  },
  backgroundImage: {
    'ui-bg-color':
      'linear-gradient(110deg, #9CD5F5 3.09%, #B1B8E6 33.47%, rgba(185, 155, 215, 0.90) 62.82%, #A293DF 84.45%, #878AEA 106.08%)',
    'ui-bg-page':
      'radial-gradient(70.47% 70.47% at 50% 50%, #FDFDFD 0%, #F3F1FF 50%, #F1FCFF 100%)',
    'ui-btn-primary': 'linear-gradient(180deg, #9EA1FF 0%, #607DE8 100%)',
    'ui-btn-secondary': 'linear-gradient(180deg, #5E7FF1 0%, #8FDDFF 100%)',
    'ui-btn-accept': 'linear-gradient(282deg, #30C36D 6.81%, #6BCD8A 93.19%)',
    'ui-btn-destructive': 'linear-gradient(282deg, #FF384A 7.07%, #FF5463 92.93%)',
    'ui-status-bg-positive': 'linear-gradient(0deg, #C4FFD8 0%, #68FF9D 100%)',
    'ui-status-bg-negative': 'linear-gradient(0deg, #FECACA 0%, #FF8F8F 100%)',
    'ui-status-bg-neutral': 'linear-gradient(0deg, #E1EBFF 0%, #C7E8FF 100%)',
  },
  boxShadow: {
    'ui-sd-primary': '0 4px 20px 0 rgba(104, 109, 224, 0.5)',
    'ui-sd-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'ui-sd-destructive': '0 10px 10px 0 rgba(255, 56, 74, 0.15)',
    'ui-sd-accept': '0 10px 10px 0 rgba(46, 213, 115, 0.15)',
    'ui-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'ui-soft': '0px 5px 50px 0px rgba(0, 67, 101, 0.08)',
    'ui-muli': '0px 5px 50px 0px rgba(0, 67, 101, 0.08), 0px 2px 6px 0px rgba(130, 169, 188, 0.08)',
    'ui-category-effect': '0px 4px 50px 0px rgba(0, 67, 101, 0.08)',
  },
  fontSize: {
    'ui-h1': ['1.5rem', '2rem'],
    'ui-h2': ['1.25rem', '1.75rem'],
    'ui-h3': ['1.125rem', '1.75rem'],
    'ui-p': ['1rem', '1.5rem'],
    'ui-note': ['0.875rem', '1.25rem'],
    'ui-small-note': ['0.75rem', '1rem'],
  },
}

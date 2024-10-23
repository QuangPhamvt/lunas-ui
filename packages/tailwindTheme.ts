const themes = {
  spacing: {
    30: '7.5rem', // 120px
    33: '8.25rem', // 132px
  },
  colors: {
    ui: {
      white: '#F8F8F8',
      'white-primary': '#FDFDFD',
      'black-primary': '#111315',
      'bg-white': '#FAFAFA',
      primary: {
        default: '#6C70F0',
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#C8D2FD',
        300: '#A6B6FB',
        400: '#828EF7',
        500: '#6C70F0',
        600: '#5048E3',
        700: '#443AC8',
        800: '#3731A2',
        900: '#312F80',
        950: '#1F1C4A',
      },
      secondary: {
        default: '#AE54F5',
        50: '#FAF5FF',
        100: '#F4E8FF',
        200: '#EBD5FF',
        300: '#DBB5FD',
        400: '#C685FB',
        500: '#AE54F5',
        600: '#9B35E8',
        700: '#8624CC',
        800: '#7123A6',
        900: '#5D1D86',
        950: '#3F0863',
      },
      tertiary: {
        default: '#4277EF',
        50: '#F0F5FE',
        100: '#DCE8FD',
        200: '#C1D7FC',
        300: '#84B2F8',
        400: '#669BF4',
        500: '#4277EF',
        600: '#2C58E4',
        700: '#2444D1',
        800: '#2339AA',
        900: '#223486',
        950: '#192252',
      },
      text: {
        black: '#19191B',
        white: '#F7F7F8',
        50: '#F7F7F8',
        100: '#EEEEF0',
        200: '#DADADD',
        300: '#B9BAC0',
        400: '#93949D',
        500: '#767681',
        600: '#606169',
        700: '#4E4E56',
        800: '#434349',
        900: '#3B3C3F',
        950: '#19191B',
      },
      destructive: {
        default: '#EF4444',
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
        950: '#450A0A',
      },

      // TEXT COLOR
      'text-primary': '#111315',
      'text-secondary': '#30353C',
      'text-third': '#30353CCC',
      'text-placeholder': '#11131566',
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
    'ui-btn-secondary': 'linear-gradient(180deg, #4277EF 0%, #669BF4 100%)',
    'ui-btn-accept': 'linear-gradient(282deg, #30C36D 6.81%, #6BCD8A 93.19%)',
    'ui-btn-destructive': 'linear-gradient(282deg, #FF384A 7.07%, #FF5463 92.93%)',
    'ui-status-bg-positive': 'linear-gradient(0deg, #C4FFD8 0%, #68FF9D 100%)',
    'ui-status-bg-negative': 'linear-gradient(0deg, #FECACA 0%, #FF8F8F 100%)',
    'ui-status-bg-neutral': 'linear-gradient(0deg, #E1EBFF 0%, #C7E8FF 100%)',
    'ui-status-order': 'linear-gradient(282deg, #30C36D 6.81%, #6BCD8A 93.19%)',
    'ui-status-out-of-stock': 'linear-gradient(282deg, #FF384A 7.07%, #FF5463 92.93%)',
    'ui-status-in-stock': 'linear-gradient(282deg, #30A8FF 6.81%, #73BAED 93.19%)',
  },
  boxShadow: {
    'ui-sd-primary': '0 4px 20px 0 rgba(104, 109, 224, 0.5)',
    'ui-sd-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    'ui-sd-destructive': '0 10px 10px 0 rgba(255, 56, 74, 0.15)',
    'ui-sd-accept': '0 10px 10px 0 rgba(46, 213, 115, 0.15)',
    'ui-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    'ui-soft': '0px 5px 12px 0px rgba(0, 67, 101, 0.08)',
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
export default themes

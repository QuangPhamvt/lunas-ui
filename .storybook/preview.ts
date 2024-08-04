import { withThemeByClassName } from '@storybook/addon-themes'
import '../packages/index.css'

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'theme-light',
      dark: 'theme-dark'
    },
    defaultTheme: 'light'
  })
]

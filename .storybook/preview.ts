import { withThemeByClassName } from '@storybook/addon-themes'
import '../packages/index.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  tags: ['autodocs'],
}

export default preview

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'theme-light',
      dark: 'theme-dark',
    },
    defaultTheme: 'light',
  }),
]

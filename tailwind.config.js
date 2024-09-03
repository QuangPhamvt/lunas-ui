/** @type {import('tailwindcss').Config} */
import tailwindcss from './packages/tailwindTheme.js'
export default {
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './.storybook/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
  theme: {
    extend: {
      ...tailwindcss,
    },
  },
}

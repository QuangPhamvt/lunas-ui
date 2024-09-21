/** @type {import('tailwindcss').Config} */
import tailwindcss from './packages/tailwindTheme.ts'
export default {
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './.storybook/pages/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      ...tailwindcss,
    },
  },
}

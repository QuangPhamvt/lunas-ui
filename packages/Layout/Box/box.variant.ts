import { cva } from 'class-variance-authority'

const boxVariant = cva('', {
  variants: {
    display: {
      block: 'block',
      'inline-block': 'inline-block',
      inline: 'inline',
      none: 'none',
    },
  },
  defaultVariants: {
    display: 'block',
  },
})
export default boxVariant

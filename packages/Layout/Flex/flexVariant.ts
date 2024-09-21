import { cva } from 'class-variance-authority'

const flexVariants = cva('flex flex-row', {
  variants: {
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    justify: {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      normal: 'justify-normal',
      stretch: 'justify-stretch',
      evenly: 'justify-evenly',
    },
    align: {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
  },
  defaultVariants: {
    wrap: 'nowrap',
    justify: 'start',
    align: 'stretch',
  },
})
export default flexVariants

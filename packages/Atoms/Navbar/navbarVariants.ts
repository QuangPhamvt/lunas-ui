import { cva } from 'class-variance-authority'

export const NavbarVariants = cva('', {
  variants: {
    variant: {
      default: '',
      active: 'border-b-2 border-ui-primary-default text-ui-primary-default',
      hover: '',
      disabled: 'text-ui-text-800 opacity-60',
    },
    chevron: {
      default: 'transition duration-500 group-hover:rotate-180',
      active: '',
      hover: 'rotate-180',
      disabled: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

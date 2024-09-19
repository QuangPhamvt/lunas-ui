import { cva } from 'class-variance-authority'

export const NavbarVariants = cva('', {
  variants: {
    variant: {
      default: '',
      active: 'text-ui-primary-default border-b-2 border-ui-primary-default',
      hover: '',
      disabled: 'text-ui-text-800 opacity-80',
    },
    chevron: {
      default: 'group-hover:rotate-180 transition duration-500',
      active: '',
      hover: 'rotate-180',
      disabled: '',
    }
  },
  defaultVariants: {
    variant: 'default',
  },
})

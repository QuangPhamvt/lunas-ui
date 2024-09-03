import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-ui-white-primary enabled:hover:opacity-80 enabled:active:opacity-100 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-ui-btn-primary enabled:active:opacity-95 enabled:active:shadow-ui-sd-primary',
        secondary: 'bg-ui-btn-secondary enabled:active:shadow-ui-sd-base',
        outline:
          'border border-solid border-ui-primary text-ui-primary enabled:active:opacity-80 enabled:active:shadow-ui-sd-primary',
        ghost:
          'bg-ui-white text-ui-primary enabled:active:opacity-80 enabled:active:shadow-ui-sd-primary',
        destructive:
          'bg-ui-btn-destructive text-ui-white-primary enabled:active:shadow-ui-sd-destructive',
        'destructive-outline':
          'border border-solid border-ui-destruction-flat text-ui-destruction-flat enabled:active:shadow-ui-sd-destructive',
        'destructive-ghost':
          'border border-solid border-ui-destruction-flat bg-ui-white text-ui-destruction-flat enabled:active:shadow-ui-sd-destructive disabled:opacity-60',
        accept: 'bg-ui-btn-accept text-ui-white-primary enabled:active:shadow-ui-sd-accept',
        'accept-outline':
          'border border-solid border-ui-positive-flat bg-ui-white text-ui-positive-flat enabled:active:shadow-ui-sd-accept',
        normal:
          'border-ui-black text-ui-black border border-solid bg-ui-white enabled:active:shadow-ui-xl',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

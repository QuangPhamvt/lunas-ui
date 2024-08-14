import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'text-ui-white-primary flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold enabled:hover:opacity-80 enabled:active:opacity-100 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-ui-btn-primary enabled:active:shadow-ui-sd-primary enabled:active:opacity-95',
        secondary: 'bg-ui-btn-secondary enabled:active:shadow-ui-sd-base',
        outline:
          'text-ui-primary border-ui-primary enabled:active:shadow-ui-sd-primary border border-solid enabled:active:opacity-80',
        ghost:
          'text-ui-primary bg-ui-white enabled:active:shadow-ui-sd-primary enabled:active:opacity-80',
        destructive:
          'bg-ui-btn-destructive text-ui-white-primary enabled:active:shadow-ui-sd-destructive',
        'destructive-outline':
          'text-ui-destruction-flat border-ui-destruction-flat enabled:active:shadow-ui-sd-destructive border border-solid',
        'destructive-ghost':
          'text-ui-destruction-flat border-ui-destruction-flat bg-ui-white enabled:active:shadow-ui-sd-destructive border border-solid disabled:opacity-60',
        accept: 'bg-ui-btn-accept text-ui-white-primary enabled:active:shadow-ui-sd-accept',
        'accept-outline':
          'text-ui-positive-flat border-ui-positive-flat bg-ui-white enabled:active:shadow-ui-sd-accept border border-solid',
        normal:
          'border-ui-black bg-ui-white text-ui-black enabled:active:shadow-ui-xl border border-solid',
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

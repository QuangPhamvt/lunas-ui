import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-ui-white-primary transition duration-300 ease-in-out enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default:
          'overflow-clip bg-ui-btn-primary enabled:hover:-translate-y-1 enabled:hover:scale-110 enabled:hover:shadow-ui-sd-primary enabled:active:scale-100 enabled:active:opacity-100 enabled:active:ring-4 enabled:active:ring-[#6C70F0]/20',
        secondary: 'bg-ui-btn-secondary enabled:active:shadow-ui-sd-base',
        outline:
          'border-ui-primary text-ui-primary border border-solid enabled:active:opacity-80 enabled:active:shadow-ui-sd-primary',
        ghost:
          'text-ui-primary bg-ui-white enabled:active:opacity-80 enabled:active:shadow-ui-sd-primary',
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

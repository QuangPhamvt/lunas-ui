import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-ui-white-primary transition duration-150 ease-in-out enabled:hover:opacity-80 enabled:active:opacity-100 enabled:active:ring-4 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default: 'bg-ui-btn-primary enabled:active:ring-[#6C70F0]/20',
        secondary: 'bg-ui-btn-secondary enabled:active:ring-[#669BF4]/40',
        outline:
          'border-ui-primary text-ui-primary border border-solid enabled:active:ring-[#737373]/20',
        ghost: 'text-ui-primary bg-ui-white enabled:active:ring-[#D4D4D4]/20',
        destructive: 'bg-ui-btn-destructive text-ui-white-primary enabled:active:ring-[#EF4444]/40',
        'destructive-outline':
          'border border-solid border-ui-destruction-flat text-ui-destruction-flat enabled:active:ring-[#EF4444]/40',
        'destructive-ghost':
          'enabled:active: border border-solid border-ui-destruction-flat bg-ui-white text-ui-destruction-flat ring-[#EF4444]/40 disabled:opacity-60',
        accept: 'bg-ui-btn-accept text-ui-white-primary enabled:active:ring-[#4ADE80]/40',
        'accept-outline':
          'border border-solid border-ui-positive-flat bg-ui-white text-ui-positive-flat enabled:active:ring-[#4ADE80]/40',
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

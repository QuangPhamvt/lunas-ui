import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-ui-white enabled:hover:opacity-80 enabled:active:opacity-100 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-btn-primary-start to-btn-primary-end enabled:active:opacity-95 enabled:active:shadow-ui-sd-primary',
        secondary:
          'bg-gradient-to-b from-btn-secondary-start to-btn-secondary-end enabled:active:shadow-ui-sd-base',
        outline:
          'text-primary border border-solid border-btn-primary-start enabled:active:bg-ui-white enabled:active:shadow-ui-sd-primary',
        ghost: 'text-primary bg-ui-white enabled:active:shadow-ui-sd-primary',
        destructive: 'bg-[#FF4858] enabled:active:shadow-ui-sd-destructive',
        'destructive-outline':
          'relative border border-solid border-btn-destructive-start bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-destructive-start from-[7.07%] to-btn-destructive-end to-[92.93%] bg-clip-text text-transparent before:pointer-events-none before:absolute before:-z-[1] before:size-full before:rounded before:content-[""] enabled:active:shadow-ui-sd-destructive enabled:active:before:bg-ui-white',
        'destructive-ghost':
          'relative bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-destructive-start from-[7.07%] to-btn-destructive-end to-[92.93%] bg-clip-text text-transparent before:pointer-events-none before:absolute before:-z-[1] before:size-full before:rounded before:bg-ui-white before:content-[""] enabled:hover:opacity-100 enabled:hover:before:opacity-80 enabled:active:shadow-ui-sd-destructive enabled:active:before:opacity-100 disabled:opacity-100 disabled:before:opacity-60',
        accept:
          'bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-accept-start from-[6.81%] to-btn-accept-end to-[93.19%] enabled:active:shadow-ui-sd-accept',
        'accept-outline':
          'relative border border-solid border-btn-accept-start bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-accept-start from-[6.81%] to-btn-accept-end to-[93.19%] bg-clip-text text-transparent before:pointer-events-none before:absolute before:-z-[1] before:size-full before:rounded before:bg-ui-white before:content-[""] enabled:hover:opacity-100 enabled:hover:before:opacity-80 enabled:active:shadow-ui-sd-accept enabled:active:before:opacity-100 disabled:opacity-100 disabled:before:opacity-40',
        normal:
          'border border-solid border-ui-black bg-ui-white text-ui-black enabled:active:shadow-xl',
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

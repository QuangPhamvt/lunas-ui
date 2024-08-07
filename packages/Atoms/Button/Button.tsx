import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/libs'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Github } from 'lucide-react'

const buttonVariants = cva(
  'flex items-center justify-center gap-1 rounded-md px-3 py-1 text-base font-semibold text-white enabled:hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-b from-btn-primary-start to-btn-primary-end enabled:active:opacity-95 enabled:active:shadow-primary',
        secondary:
          'bg-gradient-to-b from-btn-secondary-start to-btn-secondary-end enabled:active:shadow-base',
        outline:
          'border border-solid border-btn-primary-start text-primary enabled:active:shadow-primary',
        ghost: 'bg-white text-primary enabled:active:shadow-primary',
        destructive: 'bg-[#FF4858] enabled:active:shadow-destructive',
        // TODO: add gradient to icon
        'destructive-outline':
          'border border-solid border-btn-destructive-start bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-destructive-start from-[7.07%] to-btn-destructive-end to-[92.93%] bg-clip-text text-transparent enabled:active:shadow-destructive',
        'destructive-ghost': 'bg-white enabled:active:shadow-destructive',
        accept:
          'bg-[linear-gradient(282deg,var(--tw-gradient-stops))] from-btn-accept-start from-[6.81%] to-btn-accept-end to-[93.19%] enabled:active:shadow-accept',
        'accept-outline': 'border border-solid border-btn-accept-start enabled:active:shadow-xl',
        normal: 'border border-solid border-black bg-white text-black enabled:active:shadow-accept',
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

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      icon = false,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {icon && <Github size={16} />}
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }

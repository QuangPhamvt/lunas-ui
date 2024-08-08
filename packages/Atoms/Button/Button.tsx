import { type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/libs'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Github } from 'lucide-react'
import { buttonVariants } from './buttonVariants'

type IconGradientProps = {
  icon: boolean
  variant: string
}

const GradientIcon = ({ icon, variant }: IconGradientProps) => {
  if (!icon) return
  const LinearGradient = () => {
    switch (variant) {
      case 'destructive-outline':
      case 'destructive-ghost':
        return (
          <linearGradient
            id="icon-gradient"
            x1="12.3049"
            y1="15.1667"
            x2="0.202557"
            y2="12.7689"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF384A" />
            <stop offset="1" stopColor="#FF5463" />
          </linearGradient>
        )
      case 'accept-outline':
        return (
          <linearGradient
            id="icon-gradient"
            x1="12.3439"
            y1="15.1667"
            x2="0.179164"
            y2="12.7753"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2ED573" />
            <stop offset="1" stop-color="#7BED9F" />
          </linearGradient>
        )
    }
  }
  return (
    <>
      <svg width="0" height="0" className="pointer-events-none absolute">
        <LinearGradient />
      </svg>
      <Github
        size={16}
        stroke={
          ['destructive-outline', 'destructive-ghost', 'accept-outline'].includes(variant!)
            ? 'url(#icon-gradient)'
            : 'currentColor'
        }
      />
    </>
  )
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
        <GradientIcon icon={icon} variant={variant!} />
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

import { type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from 'react'
import { buttonVariants } from './buttonVariants'
import { cn } from '@/libs'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean
  /**
   * Icon to render before the children
   */
  readonly icon?: ReactNode
}

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, icon, asChild = false, children, ...props }, reference) => {
      const Comp = asChild ? Slot : 'button'
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={reference}
          {...props}
        >
          {icon}

          <Slottable>{children}</Slottable>
        </Comp>
      )
    },
  ),
)
Button.displayName = 'Button'

export type { ButtonProps }
export default Button

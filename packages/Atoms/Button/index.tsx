import { type VariantProps } from 'class-variance-authority'
import { Slot, Slottable } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef, memo, ReactNode } from 'react'
import { buttonVariants } from './buttonVariants'
import { cn } from '@/libs'
import { motion } from 'framer-motion'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean
  /**
   * Icon to render before the children
   */
  readonly icon?: ReactNode

  readonly disabledAnimation?: boolean

  readonly rootClassName?: string
}

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant,
        size,
        icon,
        asChild = false,
        rootClassName = '',
        disabledAnimation = false,
        children,
        ...props
      },
      reference,
    ) => {
      const Comp = asChild ? Slot : 'button'
      return (
        <motion.div
          whileHover={{ scale: disabledAnimation || props.disabled ? 1 : 1.1 }}
          whileTap={{ scale: disabledAnimation || props.disabled ? 1 : 0.9 }}
          className={rootClassName}
        >
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={reference}
            {...props}
          >
            {icon}

            <Slottable>{children}</Slottable>
          </Comp>
        </motion.div>
      )
    },
  ),
)
Button.displayName = 'Button'

export type { ButtonProps }
export default Button

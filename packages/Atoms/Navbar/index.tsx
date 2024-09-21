import { cn } from '@/libs'
import { type VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { NavbarVariants } from './navbarVariants'
import { Lucide2ChevronDownIcon } from '@/Icons'

interface NavbarItemProps
  extends HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof NavbarVariants> {
  state?: string
  icon?: ReactNode
  name?: string
  children?: ReactNode
  iActive?: 'disabled' | 'enabled'
}

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className="flex w-fit gap-2" {...props}>
      {children}
    </div>
  )
})
Navbar.displayName = 'Navbar'

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, state, variant, chevron, children, icon, iActive = 'enabled', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group flex w-fit select-none items-center gap-1 px-2 py-1',
          className,
          NavbarVariants({ variant }),
        )}
        {...props}
      >
        {icon}
        <p className="text-ui-p font-semibold">{children}</p>
        {iActive === 'enabled' && (
          <Lucide2ChevronDownIcon
            className={cn('mt-0.5 size-4', NavbarVariants({ chevron: variant }))}
          />
        )}
      </div>
    )
  },
)
NavbarItem.displayName = 'NavbarItem'

export { Navbar, NavbarItem }

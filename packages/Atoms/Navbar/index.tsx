import { cn } from '@/libs'
import { type VariantProps } from 'class-variance-authority'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { navbarVariants } from './navbarVariants'
import { Lucide2ChevronDownIcon } from '@/Icons'

interface NavbarItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {
  readonly state?: string
  readonly icon?: ReactNode
  readonly name?: string
  readonly children?: ReactNode
  readonly iActive?: 'disabled' | 'enabled'
}

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ children, ...props }, reference) => {
  return (
    <div ref={reference} className="flex w-fit gap-2" {...props}>
      {children}
    </div>
  )
})
Navbar.displayName = 'Navbar'

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  (
    { className, variant, children, icon, iActive: indexActive = 'enabled', ...props },
    reference,
  ) => {
    return (
      <div
        ref={reference}
        className={cn(
          'group flex w-fit select-none items-center gap-1 px-2 py-1',
          navbarVariants({ variant }),
          className,
        )}
        {...props}
      >
        {icon}

        <p className="text-ui-p font-semibold">{children}</p>

        {indexActive === 'enabled' && (
          <Lucide2ChevronDownIcon
            className={cn('mt-0.5 size-4', navbarVariants({ chevron: variant }))}
          />
        )}
      </div>
    )
  },
)
NavbarItem.displayName = 'NavbarItem'

export { Navbar, NavbarItem }

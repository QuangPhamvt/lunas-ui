import { cn } from '@/libs'
import { type VariantProps } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import { forwardRef, HTMLAttributes, ReactNode } from 'react'
import { NavbarVariants } from './navbarVariants'

interface NavbarItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof NavbarVariants> {
  state?: string
  icon?: ReactNode
  name?: string
  children?: ReactNode
  onChevron?: 'disabled' | 'enabled'
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ className, state, variant, chevron, children, icon, onChevron='enabled', ...props }, ref) => {
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
        {icon && <div className="flex size-4 items-center">{icon}</div>}
        <p className="font-semibold leading-6">{children}</p>
        <div className="">
          <ChevronDown className={cn('mt-0.5 size-4', onChevron === 'enabled' ? '' : 'hidden', NavbarVariants({ chevron: variant }))} />
        </div>
      </div>
    )
  },
)
NavbarItem.displayName = 'NavbarItem'

export default NavbarItem

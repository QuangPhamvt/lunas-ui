import { cn } from '@/libs'
import { forwardRef, HTMLAttributes, memo, ReactNode } from 'react'
import { Lucide2ChevronDownIcon } from '@/Icons'

interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  readonly state?: string
  readonly icon?: ReactNode
  readonly name?: string
  readonly children?: ReactNode
  readonly isActive?: boolean
  readonly enableLeftIcon?: boolean
}

const NavbarItem = memo(
  forwardRef<HTMLDivElement, NavbarItemProps>(
    (
      { enableLeftIcon = false, isActive = false, icon, className, children, ...props },
      reference,
    ) => {
      return (
        <div
          ref={reference}
          className={cn(
            ['group'],
            [
              'relative flex h-fit w-fit items-center gap-1 overflow-x-hidden overflow-y-hidden px-2 pb-3 pt-3',
            ],
            ['select-none text-ui-p font-medium'],
            ['hover:cursor-pointer'],
            ['transition-colors duration-150 ease-in-out'],
            [
              'before:absolute before:inset-x-0 before:top-11 before:z-10 before:h-1 before:-translate-x-full before:bg-ui-primary-default before:transition-all before:duration-300 before:ease-in-out before:content-[""] before:hover:translate-x-0',
            ],
            {
              'text-ui-primary-default': isActive,
            },
            className,
          )}
          {...props}
        >
          {icon}

          <p>{children}</p>

          {Boolean(enableLeftIcon) && (
            <Lucide2ChevronDownIcon
              className={cn(
                ['mt-0.5 size-4'],
                ['transition duration-300 ease-in-out'],
                ['group-hover:rotate-180'],
              )}
              color={isActive ? 'currentColor' : '#434349'}
            />
          )}
        </div>
      )
    },
  ),
)
NavbarItem.displayName = 'NavbarItem'
export default NavbarItem

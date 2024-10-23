import { cn } from '@/libs'
import { forwardRef, HTMLAttributes, memo, ReactNode } from 'react'
import { Lucide2ChevronDownIcon } from '@/Icons'
import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{
            opacity: 0.9,
            scale: 1,
          }}
          whileTap={{ scale: 0.9 }}
          className="overflow-hidden"
        >
          <div
            ref={reference}
            className={cn(
              ['group'],
              ['relative flex size-fit items-center gap-1 overflow-hidden px-2 py-4'],
              ['select-none !text-ui-note font-semibold'],
              ['hover:cursor-pointer'],
              {
                'text-ui-note text-ui-primary-default': isActive,
              },
              className,
            )}
            {...props}
          >
            <div className="mb-0.5">{icon}</div>

            <p>{children}</p>
            <motion.div className="absolute inset-x-0 bottom-0 z-50 h-1 -translate-x-[101%] bg-ui-primary-default transition-all duration-300 ease-in-out group-hover:translate-x-0"></motion.div>

            {Boolean(enableLeftIcon) && (
              <Lucide2ChevronDownIcon
                className={cn(
                  ['mb-0.5 size-4'],
                  ['transition duration-300 ease-in-out'],
                  ['group-hover:rotate-180'],
                )}
                color={isActive ? 'currentColor' : '#434349'}
              />
            )}
          </div>
        </motion.div>
      )
    },
  ),
)
NavbarItem.displayName = 'NavbarItem'
export default NavbarItem

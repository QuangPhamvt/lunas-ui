import { forwardRef, HTMLAttributes, memo } from 'react'
import { cn } from '@/libs'

interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {}
const Badge = memo(
  forwardRef<HTMLDivElement, IBadgeProps>(({ className, children, ...props }, reference) => {
    return (
      <div ref={reference} className={cn('relative size-fit p-1', className)} {...props}>
        {children}
        <div className="absolute left-full top-0 flex size-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ui-destructive-500 px-2 py-0.5">
          <p className="z-10 text-xs font-semibold text-ui-text-50">2</p>
          <span className="absolute -z-10 size-3/4 animate-ping rounded-full bg-ui-destructive-500 opacity-100" />
        </div>
      </div>
    )
  }),
)
Badge.displayName = 'Badge'
export default Badge

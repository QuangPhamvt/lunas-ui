import { AvatarIcon } from '@/Icons'
import { cn } from '@/libs'
import colorHash from '@/libs/color-hash'
import React, { memo, useMemo } from 'react'

interface IProps extends React.HTMLAttributes<HTMLElement> {
  readonly fullname: string
  readonly email: string
  readonly src: string
  readonly size?: number
}
const UserAvatar = memo(
  React.forwardRef<HTMLDivElement, IProps>(({ fullname, email, src: source, size }, reference) => {
    const bgColor = useMemo(() => colorHash.hex(fullname + email), [fullname, email])
    return (
      <div ref={reference} className="flex size-fit items-center justify-center rounded-full">
        {source ? (
          <img
            className={cn('rounded-full object-fill', {
              [`w-[${size}px]`]: size,
            })}
            src={source}
            alt={fullname}
          />
        ) : (
          <AvatarIcon bgColor={bgColor} size={size} />
        )}
      </div>
    )
  }),
)
UserAvatar.displayName = 'UserAvatar'
export default UserAvatar

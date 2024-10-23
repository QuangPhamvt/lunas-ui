import { AvatarIcon } from '@/Icons'
import { cn } from '@/libs'
import colorHash from '@/libs/color-hash'
import React, { forwardRef, memo } from 'react'

interface IProps extends React.HTMLAttributes<HTMLElement> {
  readonly fullname: string
  readonly email: string
  readonly src: string
  readonly size?: number
}
const UserAvatar = memo(
  forwardRef<HTMLDivElement, IProps>(({ fullname, email, src: source, size }, reference) => {
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
          <AvatarIcon bgColor={colorHash.hex(fullname + email)} size={size} />
        )}
      </div>
    )
  }),
)
UserAvatar.displayName = 'UserAvatar'
export default UserAvatar

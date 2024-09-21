import { AvatarIcon } from '@/Icons'
import { cn } from '@/libs'
import colorHash from '@/libs/color-hash'
import React, { memo, useMemo } from 'react'

interface IProps extends React.HTMLAttributes<HTMLElement> {
  fullname: string
  email: string
  src: string
  size?: number
}
const UserAvatar = React.forwardRef<HTMLElement, IProps>(({ fullname, email, src, size }) => {
  const bgColor = useMemo(() => colorHash.hex(fullname + email), [fullname, email])
  return (
    <div className="flex size-fit items-center justify-center rounded-full">
      {src ? (
        <img
          className={cn('rounded-full object-fill', {
            [`w-[${size}px]`]: size,
          })}
          src={src}
          alt={fullname}
        />
      ) : (
        <AvatarIcon bgColor={bgColor} size={size} />
      )}
    </div>
  )
})
UserAvatar.displayName = 'UserAvatar'
export default memo(UserAvatar)

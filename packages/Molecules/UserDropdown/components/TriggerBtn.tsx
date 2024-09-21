import { forwardRef, memo } from 'react'
import Flex, { IFlexProps } from '@/Layout/Flex'
import { UserAvatar } from '@/Atoms'
import { Lucide2ChevronDownIcon } from '@/Icons'
import { cn } from '@/libs'

interface IProps extends IFlexProps {
  focused: boolean
  user: {
    username: string
    fullname: string
    email: string
    avatar: string
  }
}
const UserAvatarTriggerBtn = forwardRef<HTMLDivElement, IProps>(
  ({ user, focused, ...props }, ref) => {
    return (
      <Flex
        px={2}
        py={1}
        gap={2}
        ref={ref}
        {...props}
        className={`${focused ? 'bg-neutral-200' : ''}`}
      >
        <UserAvatar size={32} fullname={user.fullname} email={user.email} src={user.avatar} />
        <p className="text-ui-p font-semibold text-ui-text-800">{user.username}</p>
        <Lucide2ChevronDownIcon
          size={16}
          className={cn(
            'transform transition-transform duration-300 ease-in-out',
            focused ? 'rotate-180' : 'rotate-0',
          )}
        />
      </Flex>
    )
  },
)
export default memo(UserAvatarTriggerBtn)

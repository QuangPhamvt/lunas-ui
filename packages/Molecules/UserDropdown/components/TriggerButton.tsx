import { forwardRef, memo } from 'react'
import Flex, { IFlexProps } from '@/Layout/Flex'
import { UserAvatar } from '@/Atoms'
import { Lucide2ChevronDownIcon } from '@/Icons'
import { cn } from '@/libs'

interface IProps extends IFlexProps {
  readonly focused: boolean
  readonly user: {
    username: string
    fullname: string
    email: string
    avatar: string
  }
}
const UserAvatarTriggerButton = memo(
  forwardRef<HTMLDivElement, IProps>(({ user, focused, ...props }, reference) => {
    return (
      <Flex px="2" py="1" gap="2" ref={reference} {...props}>
        <UserAvatar size={32} fullname={user.fullname} email={user.email} src={user.avatar} />

        <p className="text-ui-note font-semibold text-ui-text-700">{user.username}</p>

        <Lucide2ChevronDownIcon
          size={16}
          className={cn(
            'transform transition-transform duration-300 ease-in-out',
            focused ? 'rotate-180' : 'rotate-0',
          )}
        />
      </Flex>
    )
  }),
)
UserAvatarTriggerButton.displayName = 'UserAvatarTriggerButton'
export default UserAvatarTriggerButton

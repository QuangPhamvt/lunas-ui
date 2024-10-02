import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Atoms'
import { UserAvartarTriggerButton } from './components'
import { memo, useCallback } from 'react'
import { useBoolean } from '@/hooks'
import { LocalHeartIcon, LocalListIcon, LocalUserIcon, Lucide2LogOutIcon } from '@/Icons'
import { TUserSettingSelect } from '@/types'

interface IProps {
  readonly user: {
    uuid: string
    username: string
    fullname: string
    email: string
    avatar: string
  }
  readonly onSelected?: (value: TUserSettingSelect) => void
}
const UserDropdown = memo(({ onSelected = () => undefined, user }: IProps) => {
  const { value: isOpen, toggle: handleToggle } = useBoolean(false)
  const handleSelect = useCallback(
    (value: TUserSettingSelect) => {
      onSelected(value)
    },
    [onSelected],
  )
  return (
    <DropdownMenu open={isOpen} onOpenChange={handleToggle}>
      <DropdownMenuTrigger className="p-0">
        <UserAvartarTriggerButton user={user} focused={isOpen} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="top-44 size-fit text-ui-note font-medium">
        <DropdownMenuItem
          className="h-10 w-full justify-start gap-2 border-t"
          onSelect={() => handleSelect('FAVORITE')}
        >
          <LocalHeartIcon size={16} />

          <p>Yêu thích</p>
        </DropdownMenuItem>

        <DropdownMenuItem className="h-10" onSelect={() => handleSelect('PROFILE')}>
          <LocalUserIcon size={16} />

          <p>Thông tin cá nhân</p>
        </DropdownMenuItem>

        <DropdownMenuItem className="h-10" onSelect={() => handleSelect('ADDRESS')}>
          <LocalListIcon size={16} />

          <p>Danh sách địa chỉ</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="h-10 border-b border-b-gray-300"
          onSelect={() => handleSelect('LOGOUT')}
        >
          <Lucide2LogOutIcon size={16} />

          <p>Đăng xuất</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
UserDropdown.displayName = 'UserDropdown'
export default UserDropdown

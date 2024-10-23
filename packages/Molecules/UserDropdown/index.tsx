import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Atoms'
import { UserAvatarTriggerButton } from './components'
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
  const handleFavoriteSelected = useCallback(() => handleSelect('FAVORITE'), [handleSelect])
  const handleProfileSelected = useCallback(() => handleSelect('PROFILE'), [handleSelect])
  const handleAddressSelected = useCallback(() => handleSelect('ADDRESS'), [handleSelect])
  const handleLogoutSelected = useCallback(() => handleSelect('LOGOUT'), [handleSelect])
  return (
    <DropdownMenu open={isOpen} onOpenChange={handleToggle}>
      <DropdownMenuTrigger className="p-0 hover:bg-neutral-200">
        <UserAvatarTriggerButton user={user} focused={isOpen} />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="top-44 size-fit text-ui-note font-normal">
        <DropdownMenuItem
          className="h-10 w-full justify-start gap-2 border-t text-ui-text-700"
          onSelect={handleFavoriteSelected}
        >
          <LocalHeartIcon size={16} />

          <p>Yêu thích</p>
        </DropdownMenuItem>

        <DropdownMenuItem className="h-10" onSelect={handleProfileSelected}>
          <LocalUserIcon size={16} />

          <p>Thông tin cá nhân</p>
        </DropdownMenuItem>

        <DropdownMenuItem className="h-10" onSelect={handleAddressSelected}>
          <LocalListIcon size={16} />

          <p>Danh sách địa chỉ</p>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="h-10 border-b border-b-gray-300"
          onSelect={handleLogoutSelected}
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

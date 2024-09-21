import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/Atoms'
import { UserAvartarTriggerBtn } from './components'
import { memo, useCallback } from 'react'
import { useBoolean } from '@/hooks'
import { LocalHeartIcon, LocalListIcon, LocalUserIcon, Lucide2LogOutIcon } from '@/Icons'

interface IProps {
  user: {
    uuid: string
    username: string
    fullname: string
    email: string
    avatar: string
  }
  onEmitSelect?: (value: string) => void
}
const UserDropdown = ({
  user = {
    uuid: '1',
    username: 'Username',
    fullname: 'Fullname',
    email: 'example@email.com',
    avatar: '',
  },
  onEmitSelect,
}: IProps) => {
  const { value: open, toggle: handleToggle } = useBoolean(false)
  const handleSelect = useCallback(
    (value: string) => {
      onEmitSelect?.(value)
    },
    [onEmitSelect],
  )
  return (
    <DropdownMenu open={open} onOpenChange={handleToggle}>
      <DropdownMenuTrigger className="p-0">
        <UserAvartarTriggerBtn user={user} focused={open} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="size-fit">
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
}
export default memo(UserDropdown)

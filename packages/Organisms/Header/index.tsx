import { Button, Badge } from '@/Atoms'
import NavbarItem from '@/Atoms/Navbar'
import {
  DefaultLogo,
  LocalCartIcon,
  Lucide2ChartBarIcon,
  Lucide2NewPaperIcon,
  Lucide2Row2Icon,
} from '@/Icons'
import Lucide2BookIcon from '@/Icons/Lucide2BookIcon'
import { Flex } from '@/Layout'
import { cn } from '@/libs'
import { UserDropdown } from '@/Molecules'
import { TUser, TUserSettingSelect } from '@/types'
import { forwardRef, HTMLAttributes, memo, useCallback, useMemo, useState } from 'react'

export type THeaderNav = 'CATEGORY' | 'SERIES' | 'GUIDE' | 'NEWS' | null

export interface IHeaderProps extends HTMLAttributes<HTMLHeadElement> {
  user?: TUser | null
  onNavSelected?: (nav: THeaderNav) => void
  onSettingSelected?: (value: TUserSettingSelect) => void
}
const Header = memo(
  forwardRef<HTMLHeadElement, IHeaderProps>((props, reference) => {
    const { user = null, children, className, onNavSelected, onSettingSelected, ...rest } = props
    const [activedNav, setActivedNav] = useState<THeaderNav>(null)

    const isNavSelected = useMemo(() => (nav: THeaderNav) => activedNav === nav, [activedNav])

    const handleNavSelected = useCallback(
      (nav: THeaderNav) => {
        setActivedNav(nav)
        if (onNavSelected && activedNav !== nav) {
          onNavSelected(nav)
        }
      },
      [activedNav, onNavSelected],
    )

    const handleSettingSelected = useCallback(
      (value: TUserSettingSelect) => {
        if (onSettingSelected) {
          onSettingSelected(value)
        }
      },
      [onSettingSelected],
    )

    return (
      <header
        ref={reference}
        className={cn('flex h-fit items-center justify-start px-8 shadow-ui-soft', className)}
        {...rest}
      >
        <Flex className="h-16 w-33 shrink grow-0" justify="center" pr={9}>
          <DefaultLogo />
        </Flex>

        <Flex flexGrow={1} gap={0} className="text-ui-text-800">
          <NavbarItem
            enableLeftIcon
            icon={<Lucide2ChartBarIcon />}
            isActive={isNavSelected('CATEGORY')}
            className="px-4"
            onClick={() => handleNavSelected('CATEGORY')}
          >
            Danh mục
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2Row2Icon />}
            isActive={isNavSelected('SERIES')}
            className="px-4"
            onClick={() => handleNavSelected('SERIES')}
          >
            Series
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2BookIcon />}
            isActive={isNavSelected('GUIDE')}
            className="px-4"
            onClick={() => handleNavSelected('GUIDE')}
          >
            Hướng dẫn
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2NewPaperIcon />}
            isActive={isNavSelected('NEWS')}
            className="px-4"
            onClick={() => handleNavSelected('NEWS')}
          >
            Tin tức
          </NavbarItem>
        </Flex>
        <Flex flexGrow={0} className="overflow-hidden" pr={4} gap={4}>
          {Boolean(user) && (
            <>
              <UserDropdown user={user} onSelected={handleSettingSelected} />
              <Badge>
                <LocalCartIcon color="#6C70F0" size={16} />
              </Badge>
            </>
          )}
        </Flex>
      </header>
    )
  }),
)

Header.displayName = 'Header'
export default Header

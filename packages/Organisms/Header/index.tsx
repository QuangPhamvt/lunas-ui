import { Badge, Button } from '@/Atoms'
import NavbarItem from '@/Atoms/Navbar'
import {
  DefaultLogoWithIcon,
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
import { forwardRef, Fragment, HTMLAttributes, memo, useCallback, useMemo, useState } from 'react'

export type THeaderNav = 'CATEGORY' | 'SERIES' | 'GUIDE' | 'NEWS' | null
export interface IHeaderProps extends HTMLAttributes<HTMLHeadElement> {
  user?: TUser
  onSignIn?: () => void
  onSignUp?: () => void
  onNavSelected?: (nav: THeaderNav) => void
  onSettingSelected?: (value: TUserSettingSelect) => void
}
const Header = memo(
  forwardRef<HTMLHeadElement, IHeaderProps>((props, reference) => {
    const { user, className, onSignIn, onSignUp, onNavSelected, onSettingSelected, ...rest } = props
    const [activeNav, setActiveNav] = useState<THeaderNav>()

    const isNavSelected = useMemo(() => (nav: THeaderNav) => activeNav === nav, [activeNav])

    const handleSettingSelected = useCallback(
      (value: TUserSettingSelect) => {
        onSettingSelected?.(value)
      },
      [onSettingSelected],
    )

    const handleSelectCategory = useCallback(() => {
      setActiveNav('CATEGORY')
      onNavSelected?.('CATEGORY')
    }, [onNavSelected])

    const handleSelectSeries = useCallback(() => {
      setActiveNav('SERIES')
      onNavSelected?.('SERIES')
    }, [onNavSelected])

    const handleSelectGuide = useCallback(() => {
      setActiveNav('GUIDE')
      onNavSelected?.('GUIDE')
    }, [onNavSelected])

    const handleSelectNews = useCallback(() => {
      setActiveNav('NEWS')
      onNavSelected?.('NEWS')
    }, [onNavSelected])

    return (
      <header
        ref={reference}
        className={cn('flex h-fit items-center justify-start px-8 shadow-ui-soft', className)}
        {...rest}
      >
        <Flex className="h-16 w-33 shrink grow-0" justify="center" pr={9}>
          <DefaultLogoWithIcon />
        </Flex>

        <Flex flexGrow={1} gap={0} className="text-ui-text-800">
          <NavbarItem
            enableLeftIcon
            icon={<Lucide2ChartBarIcon />}
            isActive={isNavSelected('CATEGORY')}
            className="px-4"
            onClick={handleSelectCategory}
          >
            Danh mục
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2Row2Icon />}
            isActive={isNavSelected('SERIES')}
            className="px-4"
            onClick={handleSelectSeries}
          >
            Series
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2BookIcon />}
            isActive={isNavSelected('GUIDE')}
            className="px-4"
            onClick={handleSelectGuide}
          >
            Hướng dẫn
          </NavbarItem>

          <NavbarItem
            icon={<Lucide2NewPaperIcon />}
            isActive={isNavSelected('NEWS')}
            className="px-4"
            onClick={handleSelectNews}
          >
            Tin tức
          </NavbarItem>
        </Flex>
        <Flex flexGrow={0} className="overflow-visible" pr={4} gap={4} py={0}>
          {user ? (
            <Fragment>
              <UserDropdown user={user} onSelected={handleSettingSelected} />
              <Badge>
                <LocalCartIcon color="#6C70F0" size={16} />
              </Badge>
            </Fragment>
          ) : (
            <Fragment>
              <Button variant="outline" className="border-none px-6 py-2" onClick={onSignIn}>
                <span className="text-ui-p font-semibold text-ui-primary-500">Đăng nhập</span>
              </Button>
              <Button variant="default" className="border-none px-6 py-2" onClick={onSignUp}>
                <span>Đăng ký</span>
              </Button>
              <Badge>
                <LocalCartIcon color="#6C70F0" size={16} />
              </Badge>
            </Fragment>
          )}
        </Flex>
      </header>
    )
  }),
)

Header.displayName = 'Header'
export default Header

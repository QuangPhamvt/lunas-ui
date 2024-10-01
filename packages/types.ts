import { SVGAttributes } from 'react'

export interface IIconProps extends SVGAttributes<SVGElement> {
  color?: string
  size?: number | string
  bgColor?: string
}

export type TUser = {
  uuid: string
  role: string
  fullname: string
  username: string
  email: string
  avatar: string
}

export type TUserSettingSelect = 'FAVORITE' | 'PROFILE' | 'ADDRESS' | 'LOGOUT'

export type { IHeaderProps } from './Organisms/Header'

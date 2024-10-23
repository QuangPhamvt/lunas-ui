import { IIconProps } from '@/types'
import { FC } from 'react'

const Lucide2MinusIcon: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.33325 8H12.6666"
        stroke={color ?? 'black'}
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2MinusIcon

import { IIconProps } from '@/types'
import { FC } from 'react'

const Lucide2ChevronRight: FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.6665 12.0835L8.75 8L4.6665 3.9165L5.9165 2.6665L11.25 8L5.9165 13.3335L4.6665 12.0835Z"
        fill={color ?? '#B9BAC0'}
      />
    </svg>
  )
}

export default Lucide2ChevronRight

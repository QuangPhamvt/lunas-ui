import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2LayoutGrid = ({ color, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M7.28923 2.58765H2.62256V7.25431H7.28923V2.58765Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6225 2.58765H9.95581V7.25431H14.6225V2.58765Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6225 9.9209H9.95581V14.5876H14.6225V9.9209Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.28923 9.9209H2.62256V14.5876H7.28923V9.9209Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2LayoutGrid

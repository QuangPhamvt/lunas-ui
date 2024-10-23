import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2LayoutListIcon = ({ color, size, ...props }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M7.28923 9.9209H2.62256V14.5876H7.28923V9.9209Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.28923 2.58765H2.62256V7.25431H7.28923V2.58765Z"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95581 3.25439H14.6225"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95581 6.58765H14.6225"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95581 10.5876H14.6225"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.95581 13.9209H14.6225"
        stroke={color ?? '#3B3C3F'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Lucide2LayoutListIcon

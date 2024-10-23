import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2ChevronUpIcon = ({ color, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12 10L8 6L4 10"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2ChevronUpIcon.displayName = 'Lucide2ChevronUpIcon'
export default Lucide2ChevronUpIcon

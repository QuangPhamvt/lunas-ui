import { IIconProps } from '@/types'
import { DEFALUT_ICON_SIZE } from '@/utils/contants'

const Lucide2ChevronDownIcon = (props: IIconProps) => {
  const { color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFALUT_ICON_SIZE}
      height={size ?? DEFALUT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2ChevronDownIcon.displayName = 'Lucide2ChevronDownIcon'
export default Lucide2ChevronDownIcon

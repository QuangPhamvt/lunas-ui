import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const Lucide2XIcon = (props: IIconProps) => {
  const { color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2XIcon.displayName = 'Lucide2XIcon'
export default Lucide2XIcon

import { IIconProps } from '@/types'

const Lucide2ChevronDownIcon = (props: IIconProps) => {
  const { color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color ?? '#434349'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
Lucide2ChevronDownIcon.displayName = 'Lucide2ChevronDownIcon'
export default Lucide2ChevronDownIcon

import { IIconProps } from '@/types'

const Lucide2ChevronUpIcon = (props: IIconProps) => {
  const { color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12 10L8 6L4 10"
        stroke={color ?? "#434349"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
Lucide2ChevronUpIcon.displayName = 'Lucide2ChevronUpIcon'
export default Lucide2ChevronUpIcon

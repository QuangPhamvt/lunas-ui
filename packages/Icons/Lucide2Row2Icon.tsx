import { IIconProps } from '@/types'

const Lucide2Row2Icon = ({ color = 'currentColor', size = 16, ...rest }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <path
        d="M2 8H14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2Row2Icon.displayName = 'Lucide2Row2Icon'
export default Lucide2Row2Icon

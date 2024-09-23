import { IIconProps } from '@/types'
import { DEFALUT_ICON_SIZE } from '@/utils/contants'

const LocalHeartIcon = ({ color, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFALUT_ICON_SIZE}
      height={size ?? DEFALUT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8.00003 14L8.3029 13.7969C9.74253 12.8297 11.5641 11.7365 12.9132 10.1298C14.335 8.43708 15.0172 6.69867 14.9997 4.81469C14.9785 2.71099 13.3016 1 11.2616 1C9.64259 1 8.56605 1.94792 8.00003 2.63211C7.434 1.94792 6.35746 1 4.73846 1C2.69847 1 1.02158 2.71099 1.00038 4.81367C0.981535 6.69867 1.66366 8.43607 3.08681 10.1288C4.43593 11.7365 6.25752 12.8297 7.69716 13.7969L8.00003 14Z"
        fill={color ?? '#434349'}
      />
    </svg>
  )
}
LocalHeartIcon.displayName = 'LocalHeartIcon'
export default LocalHeartIcon

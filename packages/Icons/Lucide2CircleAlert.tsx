import { IIconProps } from '@/types'

const Lucide2CircleAlert = (props: IIconProps) => {
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
      <g clip-path="url(#clip0_1154_1598)">
        <path
          d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00004 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z"
          stroke={color ?? '#434349'}
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1154_1598">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
Lucide2CircleAlert.displayName = 'Lucide2CircleAlert'
export default Lucide2CircleAlert

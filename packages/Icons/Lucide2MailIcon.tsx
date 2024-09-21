import { IIconProps } from '@/types'

const Lucide2MainIcon = (props: IIconProps) => {
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
        d="M14.6667 4.66675L8.68671 8.46675C8.48089 8.5957 8.24292 8.66409 8.00004 8.66409C7.75716 8.66409 7.51919 8.5957 7.31337 8.46675L1.33337 4.66675M2.66671 2.66675H13.3334C14.0698 2.66675 14.6667 3.2637 14.6667 4.00008V12.0001C14.6667 12.7365 14.0698 13.3334 13.3334 13.3334H2.66671C1.93033 13.3334 1.33337 12.7365 1.33337 12.0001V4.00008C1.33337 3.2637 1.93033 2.66675 2.66671 2.66675Z"
        stroke={color ?? '#434349'}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
Lucide2MainIcon.displayName = 'Lucide2MainIcon'
export default Lucide2MainIcon

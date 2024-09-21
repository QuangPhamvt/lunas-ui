import { IIconProps } from '@/types'

const Lucide2UserIcon = (props: IIconProps) => {
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
        d="M12.6667 14V12.6667C12.6667 11.9594 12.3858 11.2811 11.8857 10.781C11.3856 10.281 10.7073 10 10 10H6.00004C5.2928 10 4.61452 10.281 4.11442 10.781C3.61433 11.2811 3.33337 11.9594 3.33337 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.4728 7.33333 8.00004 7.33333C6.52728 7.33333 5.33337 6.13943 5.33337 4.66667C5.33337 3.19391 6.52728 2 8.00004 2C9.4728 2 10.6667 3.19391 10.6667 4.66667Z"
        stroke={color ?? '#434349'}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
Lucide2UserIcon.displayName = 'Lucide2UserIcon'
export default Lucide2UserIcon
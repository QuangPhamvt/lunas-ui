import { IIconProps } from '@/types'
import { DEFALUT_ICON_SIZE } from '@/utils/contants'

const Lucide2MapPinIcon = (props: IIconProps) => {
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
        d="M13.3333 6.66658C13.3333 10.6666 7.99996 14.6666 7.99996 14.6666C7.99996 14.6666 2.66663 10.6666 2.66663 6.66658C2.66663 5.2521 3.22853 3.89554 4.22872 2.89535C5.22892 1.89516 6.58547 1.33325 7.99996 1.33325C9.41445 1.33325 10.771 1.89516 11.7712 2.89535C12.7714 3.89554 13.3333 5.2521 13.3333 6.66658Z"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2MapPinIcon.displayName = 'Lucide2MapPinIcon'
export default Lucide2MapPinIcon

import { IIconProps } from '@/types'
import { DEFALUT_ICON_SIZE } from '@/utils/contants'

const Lucide2ShoppingCartIcon = (props: IIconProps) => {
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
        d="M0 0H1.59681L3.72056 9.9609C3.79847 10.3257 4.00053 10.6518 4.29198 10.8831C4.58343 11.1144 4.94603 11.2364 5.31736 11.2281H13.1257C13.4892 11.2275 13.8415 11.1024 14.1246 10.8735C14.4076 10.6445 14.6045 10.3254 14.6826 9.96892L16 4.01002H2.4511M5.5489 15.198C5.5489 15.6409 5.19144 16 4.7505 16C4.30955 16 3.9521 15.6409 3.9521 15.198C3.9521 14.7551 4.30955 14.396 4.7505 14.396C5.19144 14.396 5.5489 14.7551 5.5489 15.198ZM14.3313 15.198C14.3313 15.6409 13.9739 16 13.5329 16C13.092 16 12.7345 15.6409 12.7345 15.198C12.7345 14.7551 13.092 14.396 13.5329 14.396C13.9739 14.396 14.3313 14.7551 14.3313 15.198Z"
        stroke={color ?? '#434349'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
Lucide2ShoppingCartIcon.displayName = 'Lucide2ShoppingCartIcon'
export default Lucide2ShoppingCartIcon

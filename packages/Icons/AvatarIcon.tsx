import { IIconProps } from '@/types'

const AvatarIcon = (props: IIconProps) => {
  const { bgColor, color, size } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 24}
      height={size ?? 24}
      viewBox={'0 0 96 96'}
      fill="none"
      {...props}
    >
      <path
        d="M1.9 48C1.9 73.4604 22.5397 94.1 48 94.1C73.4604 94.1 94.1 73.4604 94.1 48C94.1 22.5397 73.4604 1.9 48 1.9C22.5397 1.9 1.9 22.5397 1.9 48Z"
        fill={bgColor ?? '#6C70F0'}
        stroke="#D4D4D4"
        stroke-width="0.2"
      />
      <path
        d="M48 93.75C22.733 93.75 2.25 73.2671 2.25 48C2.25 22.733 22.733 2.25 48 2.25C73.2671 2.25 93.75 22.733 93.75 48C93.75 73.2671 73.2671 93.75 48 93.75Z"
        stroke={color ?? '#FAFAFA'}
        stroke-width="0.5"
      />
      <path
        d="M47.5064 20C50.0492 20 52.5348 20.7624 54.6492 22.1909C56.7636 23.6194 58.4116 25.6497 59.3848 28.0251C60.358 30.4006 60.6124 33.0144 60.1164 35.5362C59.6204 38.0579 58.3956 40.3744 56.5976 42.1924C54.7996 44.0104 52.5084 45.2488 50.0144 45.7504C47.5204 46.252 44.9352 45.9944 42.586 45.0104C40.2368 44.0264 38.2286 42.3604 36.8158 40.2224C35.4031 38.0846 34.649 35.5712 34.649 33L34.6619 32.4358C34.8057 29.089 36.2217 25.9274 38.6148 23.6105C41.008 21.2936 44.1932 20.0002 47.5064 20ZM52.6492 51.2C56.0592 51.2 65.3292 52.5696 67.7404 55.0076C70.1516 57.4456 71.0124 60.552 71.0124 64V66.8C71.0124 68.1792 70.4708 69.5016 69.5064 70.4768C68.5416 71.452 67.2336 72 65.8696 72H29.1428C27.7789 72 26.4708 71.452 25.5063 70.4768C24.5418 69.5016 24 68.1792 24 66.8V64.2C24 60.752 25.3546 57.4456 27.7658 55.0076C30.177 52.5696 38.9534 51.2 42.3632 51.2H52.6492Z"
        fill={color ?? '#FAFAFA'}
      />
    </svg>
  )
}
AvatarIcon.displayName = 'AvatarIcon'
export default AvatarIcon

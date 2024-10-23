import { IIconProps } from '@/types'
import { DEFAULT_ICON_SIZE } from '@/utils/constants'

const LocalListIcon = ({ color, size }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? DEFAULT_ICON_SIZE}
      height={size ?? DEFAULT_ICON_SIZE}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 3.71429C1 3.3198 1.3134 3 1.7 3H14.3C14.6866 3 15 3.3198 15 3.71429C15 4.10877 14.6866 4.42857 14.3 4.42857H1.7C1.3134 4.42857 1 4.10877 1 3.71429ZM1 8C1 7.60551 1.3134 7.28571 1.7 7.28571H14.3C14.6866 7.28571 15 7.60551 15 8C15 8.39449 14.6866 8.71429 14.3 8.71429H1.7C1.3134 8.71429 1 8.39449 1 8ZM1 12.2857C1 11.8912 1.3134 11.5714 1.7 11.5714H14.3C14.6866 11.5714 15 11.8912 15 12.2857C15 12.6802 14.6866 13 14.3 13H1.7C1.3134 13 1 12.6802 1 12.2857Z"
        fill={color ?? '#434349'}
      />
    </svg>
  )
}
LocalListIcon.displayName = 'LocalListIcon'
export default LocalListIcon

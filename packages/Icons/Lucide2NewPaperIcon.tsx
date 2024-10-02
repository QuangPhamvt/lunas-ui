import { IIconProps } from '@/types'

const Lucide2NewPaperIcon = ({ color = 'currentColor', size = 16, ...rest }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? 16}
      height={size ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      {...rest}
    >
      <g clipPath="url(#clip0_1334_1020)">
        <path
          d="M2.66659 14.6667H13.3333C13.6869 14.6667 14.026 14.5262 14.2761 14.2762C14.5261 14.0261 14.6666 13.687 14.6666 13.3334V2.66671C14.6666 2.31309 14.5261 1.97395 14.2761 1.7239C14.026 1.47385 13.6869 1.33337 13.3333 1.33337H5.33325C4.97963 1.33337 4.64049 1.47385 4.39044 1.7239C4.14039 1.97395 3.99992 2.31309 3.99992 2.66671V13.3334C3.99992 13.687 3.85944 14.0261 3.60939 14.2762C3.35935 14.5262 3.02021 14.6667 2.66659 14.6667ZM2.66659 14.6667C2.31296 14.6667 1.97382 14.5262 1.72378 14.2762C1.47373 14.0261 1.33325 13.687 1.33325 13.3334V7.33337C1.33325 6.60004 1.93325 6.00004 2.66659 6.00004H3.99992M11.9999 9.33337H6.66658M9.99992 12H6.66658M6.66658 4.00004H11.9999V6.66671H6.66658V4.00004Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1334_1020">
          <rect width={size ?? 16} height={size ?? 16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
Lucide2NewPaperIcon.displayName = 'Lucide2NewPaperIcon'
export default Lucide2NewPaperIcon

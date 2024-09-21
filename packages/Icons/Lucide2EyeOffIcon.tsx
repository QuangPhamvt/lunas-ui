import { IIconProps } from '@/types'

const Lucide2EyeOffIcon = (props: IIconProps) => {
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
      <g clip-path="url(#clip0_1154_1390)">
        <path
          d="M7.15534 3.38392C8.70827 3.19885 10.2791 3.52713 11.6279 4.31862C12.9768 5.1101 14.0295 6.3213 14.6253 7.76725C14.6809 7.91693 14.6809 8.08158 14.6253 8.23125C14.3803 8.82525 14.0566 9.38359 13.6627 9.89125M9.38935 9.43859C9.01214 9.8029 8.50694 10.0045 7.98254 9.99993C7.45815 9.99538 6.95652 9.78504 6.58571 9.41422C6.21489 9.04341 6.00455 8.54178 6 8.01739C5.99544 7.49299 6.19703 6.98779 6.56135 6.61059M11.6527 11.6659C10.7683 12.1898 9.78165 12.5173 8.75959 12.6262C7.73752 12.7351 6.70398 12.6229 5.7291 12.2972C4.75422 11.9715 3.86081 11.4398 3.10949 10.7384C2.35816 10.037 1.76651 9.18216 1.37468 8.23192C1.31912 8.08224 1.31912 7.9176 1.37468 7.76792C1.96577 6.33449 3.00579 5.13142 4.33868 4.33925M1.33334 1.33325L14.6667 14.6666"
          stroke={color ?? '#434349'}
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1154_1390">
          <rect width={size ?? 24} height={size ?? 24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
Lucide2EyeOffIcon.displayName = 'Lucide2EyeOffIcon'
export default Lucide2EyeOffIcon

import * as React from 'react'

import { cn } from '@/libs'

const Input = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-2 font-semibold w-80', className)} {...props} />
  ),
)
Input.displayName = 'Input'

const InputTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
)
InputTitle.displayName = 'InputTitle'

const InputField = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-8 flex px-2.5 py-0.5 items-center border opacity-60 bg-white rounded-lg', className)}
      {...props}
    >
      <input placeholder='Lorem claim lorem ipsum' className='outline-none text-sm font-normal w-full'/>
    </div>
  ),
)
InputField.displayName = 'InputField'

export { Input, InputTitle, InputField }

const INPUT = {
  Root: Input,
  Title: InputTitle,
}

export default INPUT

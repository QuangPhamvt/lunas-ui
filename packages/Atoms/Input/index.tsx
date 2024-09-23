import React from 'react'

import { cn } from '@/libs'

const Input = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, reference) => (
    <div
      ref={reference}
      className={cn('flex w-80 flex-col gap-2 font-semibold', className)}
      {...props}
    />
  ),
)
Input.displayName = 'Input'

const InputTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, reference) => (
    <h3
      ref={reference}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  ),
)
InputTitle.displayName = 'InputTitle'

const InputField = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, reference) => (
    <div
      ref={reference}
      className={cn(
        'flex h-8 items-center rounded-lg border bg-white px-2.5 py-0.5 opacity-60',
        className,
      )}
      {...props}
    >
      <input
        placeholder="Lorem claim lorem ipsum"
        className="w-full text-sm font-normal outline-none"
      />
    </div>
  ),
)
InputField.displayName = 'InputField'

const INPUT = {
  Root: Input,
  Title: InputTitle,
}

export { Input, InputTitle, InputField }
export default INPUT

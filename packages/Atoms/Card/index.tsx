import React from 'react'

import { cn } from '@/libs'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, reference) => (
    <div
      ref={reference}
      className={cn('bg-card text-card-foreground rounded-lg border shadow-sm', className)}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, reference) => (
    <div ref={reference} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, reference) => (
    <h3
      ref={reference}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    >
      {children}
    </h3>
  ),
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, reference) => (
  <p ref={reference} className={cn('text-muted-foreground text-sm', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, reference) => (
    <div ref={reference} className={cn('p-6 pt-0', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, reference) => (
    <div ref={reference} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'

const CARD = {
  Root: Card,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
export default CARD

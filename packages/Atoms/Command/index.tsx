'use client'

import * as React from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'

import { cn } from '@/libs'
import { Dialog, DialogContent } from '../Dialog'
import { motion } from 'framer-motion'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, reference) => (
  <CommandPrimitive
    ref={reference}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-ui-white text-ui-text-800',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="p-0 shadow-lg">
        <Command
          className={cn(
            'bg-neutral-50',
            '[&_[cmdk-group-heading]]:px-0',
            '[&_[cmdk-group-heading]]:font-medium',
            '[&_[cmdk-group-heading]]:text-ui-text-800',
            '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0',
            '[&_[cmdk-group]]:px-2',
            '[&_[cmdk-input-wrapper]_svg]:size-5',
            '[&_[cmdk-input]]:h-12',
            '[&_[cmdk-item]]:px-2',
            '[&_[cmdk-item]]:py-3',
            '[&_[cmdk-item]_svg]:size-5',
          )}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, reference) => (
  <div className="flex items-center border-b px-3">
    <Search className="mr-2 size-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={reference}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:!text-ui-text-300 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, reference) => (
  <CommandPrimitive.List
    ref={reference}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, reference) => (
  <CommandPrimitive.Empty ref={reference} className="py-6 text-center text-sm" {...props} />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, reference) => (
  <CommandPrimitive.Group
    ref={reference}
    className={cn(
      'overflow-hidden p-1 text-ui-text-800',
      '[&_[cmdk-group-heading]]:px-2',
      '[&_[cmdk-group-heading]]:py-1.5',
      '[&_[cmdk-group-heading]]:text-xs',
      '[&_[cmdk-group-heading]]:font-medium',
      '[&_[cmdk-group-heading]]:text-ui-text-800',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, reference) => (
  <CommandPrimitive.Separator
    ref={reference}
    className={cn('bg-border -mx-1 h-px', className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, reference) => (
  <motion.div
    whileHover={{
      scale: 1.02,
    }}
  >
    <CommandPrimitive.Item
      ref={reference}
      className={cn(
        'data-[selected=true]:text-ui-text-800',
        'relative flex cursor-default select-none items-center rounded-lg px-2 py-1.5 text-sm outline-none',
        'data-[disabled=true]:pointer-events-none',
        'data-[disabled=true]:opacity-50',
        'hover:cursor-pointer hover:bg-neutral-100',
        className,
      )}
      {...props}
    />
  </motion.div>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-ui-text-400', className)}
      {...props}
    />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

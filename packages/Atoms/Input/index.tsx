import {
  ChangeEvent,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { cn } from '@/libs'
import { Lucide2XIcon } from '@/Icons'
import { Flex } from '@/Layout'

interface IInputProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  placeholder?: string
  isErrored?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input = memo(
  forwardRef<HTMLDivElement, IInputProps>(
    ({ isErrored = false, placeholder = '', icon, className, onChange, ...props }, reference) => {
      const inputReference = useRef<HTMLInputElement>(null)
      const [isFocused, setIsFocused] = useState<boolean>(false)
      const [inputValue, setInputValue] = useState<string>('')

      const handleFocus = useCallback(() => {
        setIsFocused(() => true)
      }, [])

      const handleBlur = useCallback(() => {
        setIsFocused(() => false)
      }, [])

      const handleClear = useCallback(() => {
        setInputValue(() => '')
      }, [])

      const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
          const {
            target: { value },
          } = event
          setInputValue(() => value)
          onChange?.(event)
        },
        [onChange],
      )

      useEffect(() => {
        if (isFocused && inputReference.current) {
          inputReference.current.focus()
        }
        return undefined
      }, [isFocused])

      return (
        <div
          ref={reference}
          className={cn(
            [
              'relative flex flex-row items-center justify-start',
              'rounded-md border border-solid border-neutral-300 px-2',
              'bg-neutral-50',
              'hover:border-ui-primary-300',
              'cursor-text text-ui-note text-ui-text-900',
              'transition-all duration-300 ease-in-out',
            ],
            {
              'border-ui-primary-400 outline-ui-primary-200 ring-4 ring-ui-primary-200': isFocused,
              'border-ui-destructive-300 hover:border-ui-destructive-300': isErrored,
              'border-ui-destructive-400 outline-ui-destructive-200 ring-4 ring-ui-destructive-200':
                isErrored && isFocused,
            },
            className,
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        >
          <div
            className={cn('flex h-8 items-center justify-center', {
              'mr-2 border-r border-neutral-300 pr-2': Boolean(icon),
            })}
          >
            {icon}
          </div>
          <input
            ref={inputReference}
            value={inputValue}
            className="grow bg-transparent caret-ui-primary-500 outline-none placeholder:text-ui-text-400"
            onChange={handleInputChange}
            placeholder={placeholder}
          />
          <Flex
            width={16}
            height={16}
            p={0}
            justify="center"
            className={cn([
              'opacity-1 z-50 rounded-full',
              {
                'bg-neutral-100': inputValue,
                'opacity-0': !isFocused,
              },
            ])}
          >
            <button onClick={handleClear}>
              <Lucide2XIcon size={12} color={inputValue ? '#A3A3A3' : '#D4D4D4'} />
            </button>
          </Flex>
        </div>
      )
    },
  ),
)
Input.displayName = 'Input'
export default Input

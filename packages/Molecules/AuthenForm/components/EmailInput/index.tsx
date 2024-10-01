import { Lucide2CircleAlert, Lucide2MailIcon } from '@/Icons'
import { cn } from '@/libs'
import {
  ChangeEvent,
  forwardRef,
  HTMLAttributes,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

interface IEmailInputProps extends HTMLAttributes<HTMLDivElement> {
  errorMessage?: string
  onClick?: () => void
  onBlur?: () => void
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const EmailInput = memo(
  forwardRef<HTMLDivElement, IEmailInputProps>((props, reference) => {
    const { errorMessage = '', className, onClick, onBlur, onInputChange, ...rest } = props
    const inputReference = useRef<HTMLInputElement>(null)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value },
        } = event
        setInputValue(value)
        onInputChange?.(event)
      },
      [onInputChange],
    )

    const handleFocus = useCallback(() => {
      setIsFocused(true)
      onClick?.()
    }, [onClick])

    const handleBlur = useCallback(() => {
      setIsFocused(false)
      onBlur?.()
    }, [onBlur])

    useLayoutEffect(() => {
      if (isFocused && inputReference.current) {
        inputReference.current.focus()
      }
      return undefined
    }, [isFocused])

    useLayoutEffect(() => {
      if (inputReference.current && inputReference.current.value) {
        setIsFocused(true)
      }
    }, [inputReference.current?.value])

    const iconRender = useMemo(() => {
      return (
        <div className="flex items-center justify-center border-r border-solid border-r-ui-text-300 px-6 py-3">
          <Lucide2MailIcon size={16} color={isFocused ? '#606189' : '#B9BAC0'} />
        </div>
      )
    }, [isFocused])

    const errorMessageRender = useMemo(() => {
      return (
        <div
          className={cn(
            'absolute top-full mt-2 flex h-fit items-center gap-x-1 text-ui-small-note',
            {
              hidden: !errorMessage,
            },
          )}
        >
          <Lucide2CircleAlert size={16} color="#ef4444" />
          <span className="font-medium text-ui-destructive-500">{errorMessage}</span>
        </div>
      )
    }, [errorMessage])

    return (
      <div
        ref={reference}
        className={cn(
          [
            'relative flex',
            'flex-row',
            'mt-0 items-center justify-start',
            'h-fit w-full gap-x-2',
            'rounded-sm border border-solid border-ui-text-300',
            'text-sm font-medium text-ui-text-700',
            'cursor-text transition-all duration-300 ease-in-out',
            'hover:border-ui-primary-500',
          ],
          {
            'shadow-ui-muli ring-4': isFocused,
            'border-ui-primary-400 outline-ui-primary-200 ring-ui-primary-200': isFocused,
            'border-ui-destructive-300 hover:border-ui-destructive-300': errorMessage,
            'border-ui-destructive-400 outline-ui-destructive-200 ring-ui-destructive-200':
              errorMessage && isFocused,
          },
          className,
        )}
        onClick={handleFocus}
        onBlur={handleBlur}
        {...rest}
      >
        {iconRender}
        <input
          ref={inputReference}
          value={inputValue}
          placeholder="Email của bạn"
          className="shrink-0 grow bg-transparent outline-none placeholder:font-normal placeholder:text-ui-text-400"
          onChange={handleInputChange}
        />
        {errorMessageRender}
      </div>
    )
  }),
)
EmailInput.displayName = 'FullnameInput'
export default EmailInput

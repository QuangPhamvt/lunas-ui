import {
  ChangeEvent,
  FC,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Flex } from '@/Layout'
import { Lucide2MinusIcon, Lucide2PlusIcon } from '@/Icons'
import { motion } from 'framer-motion'

interface IProps {
  initialValue?: number
  onValueChange?: (value: number) => void
}
const QuantityBtn: FC<IProps> = ({ initialValue = 1, onValueChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<number>(initialValue)

  const handleValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value: val } = event.target
    const integerRegexOrEmpty = /^$|^\d*$/
    const maxLength = 3

    if (!integerRegexOrEmpty.test(val) || val.length >= maxLength) return
    if (val === '') {
      setValue(0)
      return
    }
    setValue(Number.parseInt(val, 10) || 1)
  }, [])

  const handleMinus = useCallback(
    () => setValue((prev) => (prev === 1 || prev === 0 ? 99 : Math.max(1, prev - 1))),
    [],
  )

  const handlePlus = useCallback(() => setValue((prev) => (prev === 99 ? 1 : prev + 1)), [])

  const handleOnBlur = useCallback(() => value === 0 && setValue(1), [value])

  const handleFocus = useCallback(() => inputRef.current?.focus(), [])

  const btnRender: Record<'MINUS' | 'PLUS', ReactNode> = useMemo(
    () => ({
      MINUS: (
        <button
          className="size-10 outline-none transition-colors hover:bg-violet-100"
          onClick={handleMinus}
        >
          <motion.div
            className="flex size-full items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Lucide2MinusIcon color="#6C70F0" />
          </motion.div>
        </button>
      ),
      PLUS: (
        <button
          className="size-10 outline-none transition-colors hover:bg-violet-100"
          onClick={handlePlus}
        >
          <motion.div
            className="flex size-full items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Lucide2PlusIcon color="#6C70F0" />
          </motion.div>
        </button>
      ),
    }),
    [handleMinus, handlePlus],
  )

  useLayoutEffect(() => onValueChange?.(value), [value, onValueChange])

  return (
    <Flex
      px="0"
      gapX="0"
      align="center"
      justify="center"
      className="overflow-hidden rounded-full border border-ui-primary-500"
      onBlur={handleOnBlur}
    >
      {btnRender.MINUS}
      <div
        className="flex size-10 cursor-text items-center justify-center text-ui-note font-medium text-ui-primary-500"
        onClick={handleFocus}
      >
        <input
          ref={inputRef}
          value={value}
          type="text"
          className="w-full bg-transparent text-center outline-none"
          onChange={handleValueChange}
        />
      </div>
      {btnRender.PLUS}
    </Flex>
  )
}

export default QuantityBtn

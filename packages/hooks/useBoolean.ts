import React, { useCallback } from 'react'

type TUseBoolean = {
  value: boolean
  setValue: React.Dispatch<React.SetStateAction<boolean>>
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}
const useBoolean = (initialValue = false): TUseBoolean => {
  if (typeof initialValue !== 'boolean') {
    throw new Error('initialValue must `true` or `false`')
  }
  const [value, setValue] = React.useState<boolean>(initialValue)

  const setTrue = useCallback(() => setValue(true), [])

  const setFalse = useCallback(() => setValue(false), [])

  const toggle = useCallback(() => setValue((prev) => !prev), [])

  return { value, setValue, setTrue, setFalse, toggle }
}
export default useBoolean

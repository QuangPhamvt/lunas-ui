import React from 'react'

/**
 * Custom hook that runs a cleanup function when the component is unmounted
 * @param func
 */
const useUnmount = (callback: () => void) => {
  const functionReference = React.useRef<() => void>(callback)
  functionReference.current = callback

  React.useEffect(
    () => () => {
      functionReference.current()
    },
    [],
  )
}

export default useUnmount

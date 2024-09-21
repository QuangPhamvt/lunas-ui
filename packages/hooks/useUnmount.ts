import React from 'react'

/**
 * Custom hook that runs a cleanup function when the component is unmounted
 * @param func
 */
const useUnmount = (func: () => void) => {
  const funcRef = React.useRef<() => void>(func)
  funcRef.current = func

  React.useEffect(
    () => () => {
      funcRef.current()
    },
    [],
  )
}

export default useUnmount

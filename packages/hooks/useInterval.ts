import React from 'react'

/**
 * Custom hook that creates an interval that invokes a callback function at a specified delay using the setInterval API
 * @description Custom hook to set an interval
 * @param callback - the function to be invoked at each interval
 * @param delay - the time in milliseconds between each invocation of the callback. Use `null` to clear the interval
 */
const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef<() => void>(callback)

  // Remember the latest callback if it changes
  React.useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (delay === null) return

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [callback, delay])
}
export default useInterval

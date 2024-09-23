/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const useEventListener = <
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | SVGElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event,
  ) => void,
  element?: React.RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void => {
  // Create a ref that stores handler
  const savedHandler = React.useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window

    if (!(targetElement && targetElement.addEventListener)) return undefined

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => {
      savedHandler.current(event)
    }

    // remove event listener on cleanup
    targetElement.addEventListener(eventName, listener, options)
    return () => {
      targetElement.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}
export default useEventListener

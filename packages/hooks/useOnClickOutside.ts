import React from 'react'
import useEventListener from './useEventListener'

type TEventType = 'mousedown' | 'mouseup' | 'touchstart' | 'touchend' | 'focusin' | 'focusout'

/**
  * Hook that handles click outside a specified element
  * @param ref - React ref object(s) representing the element(s) to watch for clicks outside
  * @param handler - The callback function to be executed when a click outside the element occurs
  * @param eventType - The mouse event type to listen for (optional, defaults to 'mousedown')
  * @param eventListenerOptions - The options object to be passed to the `addEventListener` method (optional)
  */
const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | React.RefObject<T>[],
  handler: (event: MouseEvent | TouchEvent | FocusEvent | Event) => void,
  eventType: TEventType = 'mousedown',
  eventListenerOptions: AddEventListenerOptions = {},
) => {
  useEventListener(
    eventType,
    (event) => {
      const target = event.target as Node

      // Do nothing if the target is not connected element with document
      if (!target || !target.isConnected) return

      const isOutside = Array.isArray(ref)
        ? ref.filter((r) => r.current).every((r) => r.current && !r.current?.contains(target))
        : ref.current && !ref.current.contains(target)

      isOutside && handler(event)
    },
    undefined,
    eventListenerOptions,
  )
}

export default useOnClickOutside

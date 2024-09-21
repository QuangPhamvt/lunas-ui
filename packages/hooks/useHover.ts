import React from 'react'
import useEventListener from './useEventListener'

/**
 * useHover
 * @description Custom hook that tracks whether a DOM element is being hovered over
 * @returns {boolean} isHovered
 */
const useHover = <T extends HTMLElement = HTMLElement>(elementRef: React.RefObject<T>): boolean => {
  const [value, setValue] = React.useState<boolean>(false)

  const handleMouseEnter = () => setValue(true)

  const handleMouseLeave = () => setValue(false)

  useEventListener('mouseenter', handleMouseEnter, elementRef)
  useEventListener('mouseleave', handleMouseLeave, elementRef)

  return value
}
export default useHover

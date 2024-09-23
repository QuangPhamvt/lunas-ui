import useEventListener from './useEventListener'

/**
 * Used: Custom hook to handle click event anywhere on the document
 * @param handler: Function to be called when click event is triggered
 */
const useClickAnyWhere = (handler: (event: MouseEvent) => void) => {
  useEventListener('click', (event) => {
    handler(event as MouseEvent)
  })
}
export default useClickAnyWhere

import React from 'react'

type TCopiedValue = string | undefined
type TCopyFunction = (text: string) => Promise<void>
/**
 * @description Custom hook to copy text to clipboard using the Clipboard API
 * @returns {void}
 */
const useCopyToClipboard = (): [TCopiedValue, TCopyFunction] => {
  const [copiedValue, setCopiedValue] = React.useState<TCopiedValue>()
  const copy: TCopyFunction = React.useCallback(async (text) => {
    if (!navigator.clipboard) {
      // eslint-disable-next-line no-console
      console.warn('Clipboard API not found')
      return
    }
    // Try to save to clipboard then save it in state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedValue(text)
    } catch {
      setCopiedValue(undefined)
    }
  }, [])
  return [copiedValue, copy]
}
export default useCopyToClipboard

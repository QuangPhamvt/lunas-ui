import React from 'react'

type TCopiedValue = string | null
type TCopyFn = (text: string) => Promise<void>
/**
 * @description Custom hook to copy text to clipboard using the Clipboard API
 * @returns {void}
 */
const useCopyToClipboard = (): [TCopiedValue, TCopyFn] => {
  const [copiedValue, setCopiedValue] = React.useState<TCopiedValue>(null)
  const copy: TCopyFn = React.useCallback(async (text) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not found')
      return
    }
    // Try to save to clipboard then save it in state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedValue(text)
    } catch (err) {
      console.error('Failed to copy:', err)
      setCopiedValue(null)
    }
  }, [])
  return [copiedValue, copy]
}
export default useCopyToClipboard

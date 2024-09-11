import tailwindTheme from '@/tailwindTheme'
import clsx, { ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTailwindMerge = () => {
  return extendTailwindMerge({
    ...tailwindTheme,
    prefix: '',
  })
}

/**
 * A utility function to merge tailwind and clsx classes
 * @param inputs - The classes to merge
 * @returns The merged classes
 */
export const cn = (...inputs: ClassValue[]) => {
  const customTwMerge = customTailwindMerge()
  return customTwMerge(clsx(inputs))
}

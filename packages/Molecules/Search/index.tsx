import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { CommandLoading } from 'cmdk'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/Atoms'
import { Flex } from '@/Layout'
import { motion } from 'framer-motion'

interface IProps {
  search?: string
  isLoading?: boolean
  items?: {
    value: string
    component: ReactNode
  }[]
  onSearch?: (value: string) => void
}
const Search: FC<IProps> = ({ search = '', isLoading = false, items = [], onSearch }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = useCallback(() => setOpen(true), [])
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    setIsMac(navigator.platform.includes('Mac'))
  }, [])

  const down = useCallback((event: KeyboardEvent) => {
    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault()
      setOpen(true)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', down)
    return () => {
      document.removeEventListener('keydown', down)
    }
  }, [down])
  return (
    <>
      <Flex
        flexGrow={0}
        pl="4"
        pr="2"
        py="1"
        width="fit"
        className="mr-4 rounded-lg border border-neutral-200 hover:cursor-pointer hover:bg-neutral-100"
        onClick={handleOpen}
      >
        <p className="pt-0.5 text-ui-small-note font-medium text-ui-text-500">
          Tìm kiếm sản phẩm, thương hiệu,...
        </p>
        <div className="flex items-center gap-x-1 rounded-md bg-neutral-100 px-2 py-0.5 text-ui-small-note">
          {isMac ? (
            <kbd className="mt-0.5 h-4">⌘</kbd>
          ) : (
            <kbd className="mt-0.5 h-3 font-semibold">^</kbd>
          )}
          <span className="text-ui-small-note font-medium">K</span>
        </div>
      </Flex>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={search}
          placeholder="Tìm kiếm sản phẩm, thương hiệu..."
          onValueChange={onSearch}
        />
        <CommandList>
          {!isLoading && (
            <CommandEmpty className="flex h-52 items-center justify-center px-4">
              <span className="font-medium text-ui-text-800">Không có kết quả</span>
            </CommandEmpty>
          )}
          {isLoading ? (
            <CommandLoading className="flex h-52 items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="box size-16 rounded-full bg-neutral-200"
              />
            </CommandLoading>
          ) : (
            <CommandGroup>
              {items.map((item, index) => (
                <CommandItem key={index} value={item.value}>
                  {item.component}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default Search

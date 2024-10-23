import { LocalCoinIcon } from '@/Icons'
import { FC, useEffect, useMemo, useState } from 'react'

interface IProps {
  money?: number
}
const Money: FC<IProps> = ({ money }) => {
  const formatter = useMemo(() => {
    return (
      money
        ?.toString()
        .replaceAll(/\D/g, '')
        .replaceAll(/\B(?=(?:\d{3})+(?!\d))/g, ',') || '0'
    )
  }, [money])

  return (
    <div className="flex gap-x-1 px-1">
      <p>{formatter}</p>
      <LocalCoinIcon />
    </div>
  )
}

export default Money

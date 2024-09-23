import { Meta, StoryObj } from '@storybook/react/*'
import * as Icons from '.'
import { useCallback, useMemo } from 'react'
import { IIconProps } from '@/types'

const meta: Meta<(typeof Icons)[keyof typeof Icons]> = {
  title: 'Icons',
  argTypes: {},
}
export default meta
type Story = StoryObj<typeof meta>

const Example = (props: IIconProps) => {
  const renderIcon = useCallback((icon: keyof typeof Icons, index: number) => {
    const Icon = Icons[icon]
    const size = useMemo(() => 40, [])
    return (
      <div
        key={index}
        className="shadow-card flex size-40 flex-col items-center justify-center rounded-lg"
      >
        <Icon size={size} {...props} />

        <p className="mt-2 text-sm">{icon}</p>
      </div>
    )
  }, [])
  return (
    <div className="flex flex-wrap gap-4">
      {Object.keys(Icons).map((icon: any, index) => renderIcon(icon, index))}
    </div>
  )
}

export const IconDefault: Story = {
  render: (args: IIconProps) => <Example {...args} />,
  args: {
    size: 40,
  },
}

import { Meta, StoryObj } from '@storybook/react/*'
import NavbarItem from '.'
import { ChartBarStacked } from 'lucide-react'

const meta: Meta<typeof NavbarItem> = {
  title: 'Components/Atoms/NavbarItem',
  component: NavbarItem,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <ChartBarStacked size={16} />,
    isActive: true,
    children: 'Danh mục',
    enableLeftIcon: true,
    onClick: () => console.log('Click'),
  },
}

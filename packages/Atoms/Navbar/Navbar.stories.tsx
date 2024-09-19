import { Meta, StoryObj } from '@storybook/react/*'
import NavbarItem from '.'
import { Book, ChartBarStacked, Newspaper, Rows2 } from 'lucide-react'

const meta: Meta<typeof NavbarItem> = {
  title: 'Components/Atoms/Navbar',
  component: NavbarItem,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: <ChartBarStacked />,
    children: 'Danh mục',
  },
}

export const Active: Story = {
  args: {
    icon: <ChartBarStacked />,
    children: 'Danh mục',
    variant: 'active',
  },
}

export const Disabled: Story = {
  args: {
    icon: <ChartBarStacked />,
    children: 'Danh mục',
    variant: 'disabled',
  },
}

export const Hover: Story = {
  args: {
    icon: <ChartBarStacked />,
    children: 'Danh mục',
    variant: 'hover',
  },
}

export const ChevronDisabled: Story = {
  args: {
    icon: <ChartBarStacked />,
    children: 'Danh mục',
    onChevron: 'disabled',
  },
}

export const AnotherExample: Story = {
  args: {
    icon: <Rows2 />,
    children: 'Series',
    variant: 'active',
    onChevron: 'disabled',
  },
}

export const AnotherExample2: Story = {
  args: {
    icon: <Book />,
    children: 'Hướng dẫn',
    variant: 'disabled',
    onChevron: 'disabled',
  },
}

export const AnotherExample3: Story = {
  args: {
    icon: <Newspaper />,
    children: 'Tin tức',
    variant: 'hover',
  },
}

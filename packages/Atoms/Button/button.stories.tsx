import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'outline',
        'ghost',
        'destructive',
        'destructive-outline',
        'destructive-ghost',
        'accept',
        'accept-outline',
        'normal',
      ],
      control: { type: 'select' },
    },
    size: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    icon: false,
    children: <span>Button</span>,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: <span>Button</span>,
    disabled: true,
  },
}

export const Icon: Story = {
  args: {
    children: <span>Button</span>,
    icon: true,
  },
}

export const Secondary: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'destructive',
  },
}

export const DestructiveOutline: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'destructive-outline',
  },
}

export const DestructiveGhost: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'destructive-ghost',
  },
}

export const Accept: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'accept',
  },
}

export const AcceptOutline: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'accept-outline',
  },
}

export const Normal: Story = {
  args: {
    children: <span>Button</span>,
    variant: 'normal',
  },
}

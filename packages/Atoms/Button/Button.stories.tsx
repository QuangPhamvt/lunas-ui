import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Github } from 'lucide-react'

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
    children: 'Button',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
}

export const Icon: Story = {
  args: {
    children: 'Button',
    icon: <Github size={16} />,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
}

export const DestructiveOutline: Story = {
  args: {
    children: 'Button',
    variant: 'destructive-outline',
  },
}

export const DestructiveGhost: Story = {
  args: {
    children: 'Button',
    variant: 'destructive-ghost',
  },
}

export const Accept: Story = {
  args: {
    children: 'Button',
    variant: 'accept',
  },
}

export const AcceptOutline: Story = {
  args: {
    children: 'Button',
    variant: 'accept-outline',
  },
}

export const Normal: Story = {
  args: {
    children: 'Button',
    variant: 'normal',
  },
}

import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Github } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'The variant of the button.',
      table: {
        type: {
          summary: 'string',
          detail:
            'default | secondary | outline | ghost | destructive | destructive-outline | destructive-ghost | accept | accept-outline | normal',
        },
        defaultValue: { summary: 'default' },
      },
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
      description: 'The size of the button.',
      table: {
        type: { summary: 'string', detail: 'default' },
        defaultValue: { summary: 'default' },
      },
      control: false,
    },
    icon: {
      description: 'The icon to display on the button. Lucide Icons are recommended.',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: false,
    },
    children: {
      description: 'The content of the button.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    disabled: {
      description: 'Controls whether the button is disabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    asChild: {
      description:
        "Controls whether its children apply the button's props. Read more: <a href='https://www.radix-ui.com/primitives/docs/utilities/slot' target='_blank' style='text-decoration: underline;'>https://www.radix-ui.com/primitives/docs/utilities/slot</a>",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
<<<<<<< HEAD
    variant: 'default',
    size: 'default',
=======
>>>>>>> origin/issue#12
    children: 'Button',
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
    icon: <Github />,
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

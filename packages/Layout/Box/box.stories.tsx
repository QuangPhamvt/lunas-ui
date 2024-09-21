import { Meta, StoryObj } from '@storybook/react/*'
import Box from '.'
import { commonArgTypes } from '../commons'

const meta: Meta<typeof Box> = {
  title: 'Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    display: {
      description: 'Set the display property for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'block' },
      },
      options: ['block', 'inline-block', 'inline', 'none'],
      control: { type: 'select' },
    },
    width: {
      description: 'Set the width for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fit' },
      },
      control: { type: 'text' },
    },
    height: {
      description: 'Set the height for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fit' },
      },
      control: { type: 'text' },
    },
    ...commonArgTypes,
  },
}
export default meta
type Story = StoryObj<typeof meta>
export const BoxDefault: Story = {
  args: {
    className: 'border border-ui-primary',
    children: 'Box',
  },
}

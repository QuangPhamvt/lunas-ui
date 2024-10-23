import { Meta, StoryObj } from '@storybook/react/*'
import Money from '.'

const meta: Meta<typeof Money> = {
  title: 'Components/Atoms/Money',
  component: Money,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    money: 1000000,
  },
}

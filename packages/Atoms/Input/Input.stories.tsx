import { Meta, StoryObj } from '@storybook/react'
import Input from '.'
import { Lucide2UserIcon } from '@/Icons'

const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    children: 'Input',
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    children: 'Input',
    icon: <Lucide2UserIcon size={16} />,
  },
}

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    children: 'Input',
    isErrored: true,
  },
}

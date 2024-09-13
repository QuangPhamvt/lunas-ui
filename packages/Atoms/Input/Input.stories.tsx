import { Meta, StoryObj } from '@storybook/react'
import { Input, InputTitle, InputField } from '.'

const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const ButtonDefault: Story = {
  args: {
    children: (
      <Input>
        <InputTitle>Label Input</InputTitle>
        <InputField></InputField>
      </Input>
    ),
  },
}

export const Default: Story = {
  args: {
    children: 'Input',
  },
}

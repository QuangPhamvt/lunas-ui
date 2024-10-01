import { Meta, StoryObj } from '@storybook/react/*'
import PasswordInput from '.'

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/Molecules/AuthenForm/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PasswordInput>

export const Default: Story = {
  args: {},
}

export const Error: Story = {
  args: {
    errorMessage: 'Error Message',
    onInputChange: (event) => console.log(event.target.value),
    onBlur: () => console.log('Blur'),
  },
}

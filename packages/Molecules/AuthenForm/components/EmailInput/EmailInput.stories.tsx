import { Meta, StoryObj } from '@storybook/react/*'
import EmailInput from '.'

const meta: Meta<typeof EmailInput> = {
  title: 'Components/Molecules/AuthenForm/EmailInput',
  component: EmailInput,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof EmailInput>

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

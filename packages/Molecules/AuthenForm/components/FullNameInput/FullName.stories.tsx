import { Meta, StoryObj } from '@storybook/react/*'
import FullnameInput from '.'

const meta: Meta<typeof FullnameInput> = {
  title: 'Components/Molecules/AuthenForm/FullnameInput',
  component: FullnameInput,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof FullnameInput>

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

import { Meta, StoryObj } from '@storybook/react/*'
import AuthForm from '.'

const meta: Meta<typeof AuthForm> = {
  title: 'Components/Molecules/AuthenForm',
  component: AuthForm,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof AuthForm>

export const LogIn: Story = {
  args: {
    title: 'Đăng nhập',
    onSignIn: () => console.log('Sign in'),
  },
}

export const Register: Story = {
  args: {
    title: 'Đăng ký',
    initialTitle: 'REGISTER'
  },
}

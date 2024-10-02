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
    isLoading: false,
    initialTitle: 'SIGN_IN',
    onSignIn(parameters) {
      console.log('Sign in', parameters)
    },
    onSignUp(parameters) {
      console.log('Sign up', parameters)
    },
  },
}

export const Register: Story = {
  args: {
    title: 'Đăng ký',
    isLoading: false,
    initialTitle: 'SIGN_OUT',
    onSignIn(parameters) {
      console.log('Sign in', parameters)
    },
    onSignUp(parameters) {
      console.log('Sign up', parameters)
    },
  },
}

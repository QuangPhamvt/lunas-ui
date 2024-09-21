import { Meta, StoryObj } from '@storybook/react/*'
import UserAvatar from '.'

const meta: Meta<typeof UserAvatar> = {
  title: 'Components/Atoms/UserAvatar',
  component: UserAvatar,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'quangpm22052003vt@gmail.com',
    fullname: 'CustomAFK',
    src: '',
    size: 48,
  },
}

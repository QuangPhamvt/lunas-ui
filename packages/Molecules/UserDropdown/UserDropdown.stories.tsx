import { Meta, StoryObj } from '@storybook/react/*'
import UserDropdown from '.'

const meta: Meta<typeof UserDropdown> = {
  title: 'Components/Molecules/UserDropdown',
  component: UserDropdown,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      uuid: '3a955f79-8ae9-4578-9218-d82e8a8d3169',
      username: 'CustomAFK',
      fullname: 'Pham Minh Quang',
      email: 'quangpm220503vt@gmail.com',
      avatar: '',
    },
  },
}

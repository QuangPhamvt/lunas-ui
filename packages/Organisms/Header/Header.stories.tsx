import { Meta, StoryObj } from '@storybook/react/*'
import Header from '.'

const meta: Meta<typeof Header> = {
  title: 'Components/Organisms/Header',
  component: Header,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: null,
  },
}

export const WithUser: Story = {
  args: {
    user: {
      uuid: 'c3008463-fe16-48b6-a79f-8656bd5e54eb',
      role: 'USER',
      email: 'example@gmail.com',
      username: 'CustomAFK',
      fullname: 'Pham Minh Quang',
      avatar: '',
    },
    onSettingSelected: (value) => console.log(value),
  }
}

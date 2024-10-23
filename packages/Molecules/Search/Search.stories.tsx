import { Meta, StoryObj } from '@storybook/react/*'
import Search from '.'

const meta: Meta<typeof Search> = {
  title: 'Components/Molecules/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = {}

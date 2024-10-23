import { Meta, StoryObj } from '@storybook/react/*'
import QuantityBtn from '.'

const meta: Meta<typeof QuantityBtn> = {
  title: 'Components/Atoms/QuantityBtn',
  component: QuantityBtn,
  parameters: {
    layout: 'centered',
  },
}
export default meta
type Story = StoryObj<typeof QuantityBtn>

export const Default: Story = {
  args: {
    onValueChange: (value) => console.log(value),
  },
}

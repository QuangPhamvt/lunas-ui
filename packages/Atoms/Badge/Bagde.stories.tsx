import { Meta, StoryObj } from "@storybook/react/*";
import Badge from ".";
import { LocalCartIcon } from "@/Icons";

const meta: Meta<typeof Badge> = {
  title: "Components/Atoms/Badge",
  component: Badge,
  parameters: {
    layoput: "centered",
  }
}

export default meta;
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    className: "bg-ui-primary-500 text-ui-text-50 rounded-md px-2",
    children: "Badge",
  }
}

export const Cart: Story = {
  args: {
    className: '',
    children: <LocalCartIcon size={16} color="#6C70F0" />,
  }
}

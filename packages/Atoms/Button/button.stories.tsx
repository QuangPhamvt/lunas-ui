import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
	title: 'Components/Atoms/Button',
	tags: ['autodocs'],
	component: Button,
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof meta>

export const ButtonDefault: Story = {
  args: {
    children: <span>Button</span>, 
  }
}

export const ButtonPrimary: Story = {
  args: {
    children: <span>Button Primary</span>, 
  }
}

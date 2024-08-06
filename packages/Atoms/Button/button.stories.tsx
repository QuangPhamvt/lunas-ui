import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <span>Button</span>,
  },
};

export const Secondary: Story = {
  args: {
    children: <span>Button</span>,
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: <span>Button</span>,
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: <span>Button</span>,
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    children: <span>Button</span>,
    variant: "destructive",
  },
};

export const DestructiveOutline: Story = {
  args: {
    children: <span>Button</span>,
    variant: "destructive-outline",
  },
};

export const DestructiveGhost: Story = {
  args: {
    children: <span>Button</span>,
    variant: "destructive-ghost",
  },
};

export const Accept: Story = {
  args: {
    children: <span>Button</span>,
    variant: "accept",
  },
};

export const AcceptOutline: Story = {
  args: {
    children: <span>Button</span>,
    variant: "accept-outline",
  },
};

export const Normal: Story = {
  args: {
    children: <span>Button</span>,
    variant: "normal",
  },
};

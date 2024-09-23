import { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '.'

const meta: Meta<typeof Card> = {
  title: 'Components/Atoms/Card',
  tags: ['autodocs'],
  component: Card,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const ButtonDefault: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>

        <CardContent>Card Content</CardContent>

        <CardFooter>Card Footer</CardFooter>
      </>
    ),
  },
}

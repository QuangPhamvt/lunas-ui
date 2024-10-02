import { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './toaster'
import { useToast } from '@/hooks'
import Button from '../Button'

const DefaultFC = () => {
  const { toast } = useToast()
  return (
    <>
      <Button onClick={() => toast({ title: 'Hello', description: 'World' })}>Show Toast</Button>
      <Toaster />
    </>
  )
}
const DestructiveFC = () => {
  const { toast } = useToast()
  return (
    <>
      <Button
        onClick={() => toast({ title: 'Hello', description: 'World', variant: 'destructive' })}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  )
}

const meta: Meta<typeof Toaster> = {
  title: 'Components/Atoms/Toast',
  component: Toaster,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => <DefaultFC />,
}

export const Destructive: Story = {
  render: () => <DestructiveFC />,
}

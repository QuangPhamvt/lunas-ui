import { Meta, StoryObj } from '@storybook/react/*'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '.'
import { Label } from '../Label'

const meta: Meta = {
  title: 'Components/Atoms/Dialog',
  component: Dialog,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2>Dialog Title</h2>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ),
}

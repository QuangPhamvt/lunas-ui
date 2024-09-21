import { Meta, StoryObj } from '@storybook/react/*'
import Flex from '.'
import { Fragment } from 'react/jsx-runtime'
import { commonArgTypes } from '../commons'

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      description: 'Is direction of the flex vertical, use `flex-direction: column;`',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    wrap: {
      description: 'set whether the element is displayed in a single line or in multiple lines',
      table: {
        type: { summary: 'string', detail: 'nowrap' },
        defaultValue: { summary: 'nowrap' },
      },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: { type: 'select' },
    },
    justify: {
      description: 'Set the alignment of elements in the direction of the main axis',
      table: {
        type: { summary: 'string', detail: 'justify-content' },
        defaultValue: { summary: 'start' },
      },
      options: ['start', 'end', 'center', 'between', 'around', 'normal', 'stretch', 'evenly'],
      control: { type: 'select' },
    },
    align: {
      description: 'Set the alignment of elements in the direction of the cross axis',
      table: {
        type: { summary: 'string', detail: 'align-items' },
        defaultValue: { summary: 'center' },
      },
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      control: { type: 'select' },
    },
    width: {
      description: 'Set the width for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fit' },
      },
      control: { type: 'text' },
    },
    height: {
      description: 'Set the height for the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fit' },
      },
      control: { type: 'text' },
    },
    ...commonArgTypes,
    children: { control: false },
  },
}
export default meta
type Story = StoryObj<typeof meta>

export const FlexDefault: Story = {
  args: {
    className: 'w-96 h-32 border border-ui-primary',
    children: (
      <Fragment>
        <div className="size-16 rounded-md bg-ui-primary-300 shadow-md"></div>
        <div className="size-16 rounded-md bg-ui-primary-300 shadow-md"></div>
        <div className="size-16 rounded-md bg-ui-primary-300 shadow-md"></div>
      </Fragment>
    ),
  },
}

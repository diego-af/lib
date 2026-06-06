import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'color',
    },
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Playground: Story = {}

import { useState, useCallback } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    isOpen: false,
    title: 'Modal Title',
    children: 'Modal content goes here.',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Playground: Story = {
  render: (args) => <Modal {...args} />,
}

export const WithButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const toggle = useCallback(() => setOpen((v) => !v), [])
    return (
      <>
        <Button onClick={toggle}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Example Modal" footer={<Button onClick={() => setOpen(false)}>Close</Button>}>
          <p>This is an example modal with a title, body content, and a footer.</p>
        </Modal>
      </>
    )
  },
}

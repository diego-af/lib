import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Digite algo...',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {
  args: {
    label: 'Nome',
    helperText: 'Seu nome completo',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email inválido',
  },
}

export const Password: Story = {
  args: {
    label: 'Senha',
    type: 'password',
  },
}

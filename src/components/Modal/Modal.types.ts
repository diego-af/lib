import type { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  onClose?: () => void
  title?: string
  footer?: ReactNode
  children: ReactNode
}

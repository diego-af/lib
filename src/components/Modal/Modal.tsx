import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { Overlay, Container, Header, Title, CloseButton, Body, Footer } from './Modal.styles'
import type { ModalProps } from './Modal.types'

export function Modal({ isOpen, onClose, title, footer, children }: ModalProps): JSX.Element | null {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.()
    },
    [onClose],
  )

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return createPortal(
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        {title ? (
          <Header>
            <Title>{title}</Title>
            {onClose ? <CloseButton onClick={onClose}>&times;</CloseButton> : null}
          </Header>
        ) : null}
        <Body>{children}</Body>
        {footer ? <Footer>{footer}</Footer> : null}
      </Container>
    </Overlay>,
    document.body,
  )
}

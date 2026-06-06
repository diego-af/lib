import { Spinner } from '../Spinner'
import { ButtonRoot } from './Button.styles'
import type { ButtonProps } from './Button.types'

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const isDisabled = disabled || loading

  return (
    <ButtonRoot $variant={variant} $size={size} disabled={isDisabled} {...rest}>
      {loading ? <Spinner size="sm" color="currentColor" /> : null}
      {children}
    </ButtonRoot>
  )
}

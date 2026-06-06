import { useTheme } from 'styled-components'

import { SpinnerRoot } from './Spinner.styles'
import type { SpinnerProps } from './Spinner.types'

export function Spinner({ size = 'md', color }: SpinnerProps): JSX.Element {
  const theme = useTheme()
  const resolvedColor = color ?? theme.colors.primary

  return <SpinnerRoot aria-label="loading" role="status" $size={size} $color={resolvedColor} />
}

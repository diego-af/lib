import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const sizeMap = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.5rem ',
} as const

export const SpinnerRoot = styled.span<{
  $size: keyof typeof sizeMap
  $color: string
}>`
  display: inline-block;
  width: ${({ $size }) => sizeMap[$size]};
  height: ${({ $size }) => sizeMap[$size]};
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-top-color: ${({ $color }) => $color};
  animation: ${spin} 0.8s linear infinite;
`

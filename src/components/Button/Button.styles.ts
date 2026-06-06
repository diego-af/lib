import styled, { css } from 'styled-components'

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.typography.fontSizeSm};
    border-radius: ${({ theme }) => theme.radii.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.fontSizeMd};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.fontSizeLg};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondaryHover};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surface};
    }
  `,
}

export const ButtonRoot = styled.button<{
  $variant: 'primary' | 'secondary' | 'ghost'
  $size: 'sm' | 'md' | 'lg'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`

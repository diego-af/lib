import type { DefaultTheme } from './types'

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    secondaryHover: '#475569',
    text: '#0f172a',
    textMuted: '#64748b',
    background: '#f8fafc',
    surface: '#ffffff',
    border: '#cbd5e1',
    error: '#dc2626',
    overlay: 'rgba(15, 23, 42, 0.55)',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSizeSm: '0.875rem',
    fontSizeMd: '1rem',
    fontSizeLg: '1.125rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  zIndex: {
    modal: 1000,
    overlay: 999,
  },
}

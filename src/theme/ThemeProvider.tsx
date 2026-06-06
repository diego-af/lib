import type { ReactNode } from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  type DefaultTheme,
} from 'styled-components'

import { defaultTheme } from './defaultTheme'

export interface LibThemeProviderProps {
  theme?: Partial<DefaultTheme>
  children: ReactNode
}

function mergeTheme(theme?: Partial<DefaultTheme>): DefaultTheme {
  if (!theme) return defaultTheme

  return {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
    typography: {
      ...defaultTheme.typography,
      ...theme.typography,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...theme.spacing,
    },
    radii: {
      ...defaultTheme.radii,
      ...theme.radii,
    },
    zIndex: {
      ...defaultTheme.zIndex,
      ...theme.zIndex,
    },
  }
}

export function ThemeProvider({ theme, children }: LibThemeProviderProps): JSX.Element {
  const mergedTheme = mergeTheme(theme)
  return <StyledComponentsThemeProvider theme={mergedTheme}>{children}</StyledComponentsThemeProvider>
}

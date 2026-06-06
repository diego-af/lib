import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryHover: string
      secondary: string
      secondaryHover: string
      text: string
      textMuted: string
      background: string
      surface: string
      border: string
      error: string
      overlay: string
    }
    typography: {
      fontFamily: string
      fontSizeSm: string
      fontSizeMd: string
      fontSizeLg: string
      fontWeightNormal: number
      fontWeightMedium: number
      fontWeightBold: number
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    radii: {
      sm: string
      md: string
      lg: string
      full: string
    }
    zIndex: {
      modal: number
      overlay: number
    }
  }
}

export type { DefaultTheme } from 'styled-components'

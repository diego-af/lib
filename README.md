# @diego-af/lib-dieguin

Biblioteca de componentes React com suporte a tema via `ThemeProvider`.

## Requisitos

- Node.js >= 22.12.0
- React >= 17
- React DOM >= 17
- styled-components >= 5

## Instalação (GitHub Packages)

1. No projeto consumidor, crie/edite `.npmrc`:

```ini
@diego-af:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Instale o pacote:

```bash
npm install @diego-af/lib-dieguin
```

## Uso básico

```tsx
import { ThemeProvider, Spinner } from '@diego-af/lib-dieguin'

export default function App() {
  return (
    <ThemeProvider>
      <Spinner size="md" />
    </ThemeProvider>
  )
}
```

## Personalizar tema

```tsx
import { ThemeProvider } from '@diego-af/lib-dieguin'

const customTheme = {
  colors: {
    primary: '#e11d48',
  },
}

export function Root() {
  return <ThemeProvider theme={customTheme}>{/* app */}</ThemeProvider>
}
```

## Next.js App Router

Componentes com styled-components devem ser usados em Client Components.

```tsx
'use client'
```

## Scripts

- `npm run build` - build da lib
- `npm run storybook` - storybook local
- `npm run build-storybook` - build estático do storybook

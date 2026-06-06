# UI Components — Design

**Spec**: `.specs/features/ui-components/spec.md`
**Status**: Draft

---

## Architecture Overview

A lib é um **single-package** publicado no GitHub Packages. Internamente usa **Styled Components v6** com `ThemeProvider` para theming. O build é feito via **tsup** gerando três artefatos: ESM, CJS e `.d.ts`.

```
lib-dieguin/
├── src/
│   ├── index.ts                 ← barrel export público
│   ├── theme/
│   │   ├── defaultTheme.ts      ← tokens padrão
│   │   ├── types.ts             ← DefaultTheme interface (augmentation)
│   │   └── ThemeProvider.tsx    ← wrapper do ThemeProvider do SC
│   └── components/
│       ├── Button/
│       │   ├── Button.tsx
│       │   ├── Button.styles.ts
│       │   ├── Button.types.ts
│       │   └── index.ts
│       ├── Input/
│       │   ├── Input.tsx
│       │   ├── Input.styles.ts
│       │   ├── Input.types.ts
│       │   └── index.ts
│       ├── Modal/
│       │   ├── Modal.tsx
│       │   ├── Modal.styles.ts
│       │   ├── Modal.types.ts
│       │   └── index.ts
│       └── Spinner/
│           ├── Spinner.tsx
│           ├── Spinner.styles.ts
│           ├── Spinner.types.ts
│           └── index.ts
├── .storybook/
│   ├── main.ts
│   └── preview.tsx              ← ThemeProvider global decorator
├── tsup.config.ts
├── tsconfig.json
├── package.json
└── .npmrc                       ← GitHub Packages config
```

**Fluxo de consumo:**

```
Projeto consumidor
      │
      ▼
<ThemeProvider theme={meuTema}>
      │
      ├── <Button variant="primary">  ──→ lê props.theme.colors.primary
      ├── <Input label="Email">       ──→ lê props.theme.colors.border
      ├── <Modal isOpen={true}>       ──→ lê props.theme.colors.overlay
      └── <Spinner size="md">        ──→ lê props.theme.colors.primary
```

---

## Code Reuse Analysis

Projeto greenfield — não há código existente para reaproveitar.

### Padrões a adotar

| Padrão | Referência | Aplicação |
|--------|-----------|-----------|
| Barrel export | `src/index.ts` | Re-exporta todos os componentes e o ThemeProvider |
| Component folder pattern | `Button/index.ts` exporta `Button.tsx` | Isolamento por componente |
| Styles em arquivo separado | `Button.styles.ts` | Separa lógica de apresentação |
| Types em arquivo separado | `Button.types.ts` | Props e variantes tipadas |
| DefaultTheme augmentation | `styled-components.d.ts` | Type-safety automático nos interpolations |

---

## Components

### `theme/types.ts`

- **Purpose**: Define e augmenta a interface `DefaultTheme` do styled-components para type-safety completo
- **Location**: `src/theme/types.ts`
- **Interfaces**:
  ```typescript
  // augmentation de DefaultTheme
  interface DefaultTheme {
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
      xs: string   // 4px
      sm: string   // 8px
      md: string   // 16px
      lg: string   // 24px
      xl: string   // 32px
    }
    radii: {
      sm: string   // 4px
      md: string   // 8px
      lg: string   // 16px
      full: string // 9999px
    }
    zIndex: {
      modal: number  // 1000
      overlay: number // 999
    }
  }
  ```
- **Dependencies**: `styled-components`
- **Reuses**: nada

---

### `theme/defaultTheme.ts`

- **Purpose**: Objeto de tema padrão que implementa `DefaultTheme`
- **Location**: `src/theme/defaultTheme.ts`
- **Interfaces**:
  ```typescript
  export const defaultTheme: DefaultTheme = { ... }
  ```
- **Dependencies**: `src/theme/types.ts`
- **Reuses**: nada

---

### `theme/ThemeProvider.tsx`

- **Purpose**: Wrapper sobre o `ThemeProvider` do styled-components que injeta o `defaultTheme` quando nenhum tema é fornecido, e faz deep merge do tema do usuário com o default
- **Location**: `src/theme/ThemeProvider.tsx`
- **Interfaces**:
  ```typescript
  interface LibThemeProviderProps {
    theme?: Partial<DefaultTheme>
    children: React.ReactNode
  }
  export function ThemeProvider(props: LibThemeProviderProps): JSX.Element
  ```
- **Dependencies**: `styled-components`, `src/theme/defaultTheme.ts`, `src/theme/types.ts`
- **Reuses**: nada

---

### `components/Button/Button.tsx`

- **Purpose**: Componente de botão com variantes, tamanhos e estados
- **Location**: `src/components/Button/Button.tsx`
- **Interfaces**:
  ```typescript
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost'  // default: 'primary'
    size?: 'sm' | 'md' | 'lg'                     // default: 'md'
    loading?: boolean                              // default: false
  }
  ```
- **Dependencies**: `src/theme/types.ts`, `src/components/Spinner`
- **Reuses**: `Spinner` (quando `loading={true}`)
- **Notas**:
  - `disabled` vem do `React.ButtonHTMLAttributes` nativo
  - Quando `loading={true}` → `disabled` implícito + exibe `<Spinner size="sm">`

---

### `components/Input/Input.tsx`

- **Purpose**: Campo de input com label, helper text e estado de erro
- **Location**: `src/components/Input/Input.tsx`
- **Interfaces**:
  ```typescript
  interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string
    error?: string
    helperText?: string
    // type herdado do HTMLInputAttributes (text | email | password | etc.)
  }
  ```
- **Dependencies**: `src/theme/types.ts`
- **Notas**:
  - Quando `type="password"` → ícone toggle mostra/oculta senha (estado interno)
  - `id` gerado automaticamente via `useId()` (React 18+) ou `Math.random()` fallback para React 17
  - `error` tem prioridade sobre `helperText`

---

### `components/Modal/Modal.tsx`

- **Purpose**: Modal controlado externamente com backdrop, header opcional e footer opcional
- **Location**: `src/components/Modal/Modal.tsx`
- **Interfaces**:
  ```typescript
  interface ModalProps {
    isOpen: boolean
    onClose?: () => void
    title?: string
    footer?: React.ReactNode
    children: React.ReactNode
  }
  ```
- **Dependencies**: `src/theme/types.ts`
- **Notas**:
  - Renderiza via `ReactDOM.createPortal` no `document.body`
  - Quando `isOpen={false}` → retorna `null` (sem DOM)
  - Quando `isOpen={true}` → adiciona `overflow: hidden` no `body`
  - Listener de `keydown` Escape chama `onClose` se fornecido
  - Clique no backdrop chama `onClose` se fornecido

---

### `components/Spinner/Spinner.tsx`

- **Purpose**: Indicador de carregamento animado via CSS
- **Location**: `src/components/Spinner/Spinner.tsx`
- **Interfaces**:
  ```typescript
  interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg'  // default: 'md'
    color?: string               // default: theme.colors.primary
  }
  ```
- **Dependencies**: `src/theme/types.ts`
- **Notas**: animação via `@keyframes` no styled-component (sem dependência externa)

---

### `src/index.ts` (barrel)

- **Purpose**: Ponto único de entrada público da lib
- **Location**: `src/index.ts`
- **Exports**:
  ```typescript
  export { ThemeProvider } from './theme/ThemeProvider'
  export type { DefaultTheme } from './theme/types'
  export { Button } from './components/Button'
  export { Input } from './components/Input'
  export { Modal } from './components/Modal'
  export { Spinner } from './components/Spinner'
  ```

---

## Data Models

Não há modelos de dados — a lib é puramente de UI.

---

## Build & Package

### `tsup.config.ts`

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'styled-components'],
})
```

### `package.json` — campos críticos

```json
{
  "name": "lib-dieguin",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "peerDependencies": {
    "react": ">=17",
    "react-dom": ">=17",
    "styled-components": ">=5"
  },
  "files": ["dist"]
}
```

> **Nota sobre styled-components v5 vs v6:** SC v5 suporta React 17+; SC v6 requer React 18+. Para garantir compatibilidade com React 17, a lib usa SC v5 como peerDependency (`>=5`). O consumidor que usar React 18+ pode instalar SC v6 sem problemas.

---

## Compatibilidade React 17 — Considerações

| Ponto | React 17 | React 18+ | Solução adotada |
|-------|----------|-----------|-----------------|
| `useId()` | Não existe | Existe | Fallback com `useRef` + contador estático no Input |
| `createPortal` | Disponível | Disponível | Sem impacto |
| JSX Transform | Novo transform (17+) | Novo transform | `tsconfig` com `jsx: react-jsx` |
| Concurrent features | Não | Sim | Não usamos — sem impacto |

---

## Storybook

- **Versão**: Storybook 8.x (suporta Vite, React 17+)
- **Preview**: `ThemeProvider` global decorator em `.storybook/preview.tsx` garante que todas as stories tenham acesso ao tema padrão
- **Addons**: `@storybook/addon-controls` (já incluso no Storybook 8)

---

## Error Handling Strategy

| Cenário | Handling | O que o usuário vê |
|---------|----------|-------------------|
| Styled Components em RSC (Next.js App Router) | Erro nativo do React/Next.js | Mensagem de erro do framework — documentar no README |
| `ThemeProvider` com tema vazio `{}` | Deep merge com `defaultTheme` garante todos os tokens | Tema padrão aplicado, sem crash |
| `Modal` sem `onClose` | Guard `onClose?.()` | Modal funciona; Escape e backdrop não disparam ação |
| `Button` com `children` nulo | Styled component renderiza botão vazio | Botão vazio visível |

---

## Tech Decisions

| Decisão | Escolha | Rationale |
|---------|---------|-----------|
| Bundler | tsup | Zero-config, suporta ESM+CJS+dts em um comando; baseado em esbuild (rápido) |
| Styled Components versão | peerDep `>=5` | v5 suporta React 17; v6 requer React 18 — manter flexibilidade |
| `useId` fallback | `useRef` + contador estático | `useId` só existe no React 18; Input precisa de id único para `htmlFor` |
| JSX transform | `react-jsx` (novo transform) | Disponível desde React 17 — não requer `import React` em cada arquivo |
| Portal target | `document.body` | Padrão universal; sem necessidade de container customizado no v1 |
| Single-package | Sim | Menor overhead de versionamento para v1 |

# UI Components — Tasks

**Design**: `.specs/features/ui-components/design.md`
**Status**: In Progress (T1-T10 concluídos)

---

## Execution Plan

```
Phase 1 — Scaffold (Sequential)
  T1 → T2 → T3

Phase 2 — Theme System (Sequential)
  T3 → T4 → T5 → T6

Phase 3 — Componentes (Parallel após T6)
  T6 → T7 [P]
       T8 [P]
       T9 [P]
      T10 [P]

Phase 4 — Integração e Publicação (Sequential)
  T7+T8+T9+T10 → T11 → T12 → T13 → T14
```

```
Phase 1:
  T1 ──→ T2 ──→ T3

Phase 2:
  T3 ──→ T4 ──→ T5 ──→ T6

Phase 3 (Parallel):
          ┌──→ T7  [P] ──┐
  T6 ─────┼──→ T8  [P] ──┼──→ T11
          ├──→ T9  [P] ──┤
          └──→ T10 [P] ──┘

Phase 4:
  T11 ──→ T12 ──→ T13 ──→ T14
```

---

## Task Breakdown

### T1: Scaffold do repositório (package.json, tsconfig, eslint, prettier)

**What**: Criar estrutura base do projeto com configuração de TypeScript, linting e formatação
**Where**: `/` (raiz do repositório)
**Depends on**: None
**Reuses**: nada
**Requirement**: UI-01

**Done when**:
- [x] `package.json` criado com nome `lib-dieguin`, campos `main`, `module`, `types`, `exports`, `peerDependencies` (react>=17, react-dom>=17, styled-components>=5), `files: ["dist"]`
- [x] `tsconfig.json` com `target: ES2020`, `module: ESNext`, `moduleResolution: Bundler`, `jsx: react-jsx`, `strict: true`, `declaration: true`
- [x] `.eslintrc.cjs` configurado para TypeScript + React
- [x] `.prettierrc` configurado
- [x] `src/` criada com `index.ts` vazio
- [x] `npm install` roda sem erros

**Tests**: none
**Gate**: build — `npx tsc --noEmit`

**Commit**: `chore: scaffold project structure`

---

### T2: Configuração do tsup

**What**: Criar `tsup.config.ts` com build ESM + CJS + dts, externalizando peerDependencies
**Where**: `tsup.config.ts`, atualizar `package.json` com scripts de build
**Depends on**: T1
**Reuses**: nada
**Requirement**: UI-01

**Done when**:
- [x] `tsup.config.ts` criado com `entry: ['src/index.ts']`, `format: ['esm', 'cjs']`, `dts: true`, `sourcemap: true`, `clean: true`, `external: ['react', 'react-dom', 'styled-components']`
- [x] Script `"build": "tsup"` adicionado ao `package.json`
- [x] `npm run build` gera `dist/index.js`, `dist/index.mjs`, `dist/index.d.ts` sem erros
- [x] `react`, `react-dom` e `styled-components` não estão bundlados no output

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `chore: configure tsup for ESM+CJS+dts build`

---

### T3: Configuração do Storybook

**What**: Instalar e configurar Storybook 8 com Vite e React, incluindo decorator global do ThemeProvider
**Where**: `.storybook/main.ts`, `.storybook/preview.tsx`, atualizar `package.json`
**Depends on**: T2
**Reuses**: nada
**Requirement**: UI-07

**Done when**:
- [x] Storybook 8 instalado com `@storybook/react-vite`
- [x] `.storybook/main.ts` configurado com framework `@storybook/react-vite`
- [x] `.storybook/preview.tsx` com decorator que envolve todas as stories no `ThemeProvider` com `defaultTheme` (placeholder — será atualizado após T5)
- [x] Script `"storybook": "storybook dev -p 6006"` e `"build-storybook": "storybook build"` no `package.json`
- [x] `npm run storybook` inicia sem erros

**Tests**: none
**Gate**: build — `npm run build-storybook`

**Commit**: `chore: configure Storybook 8 with React + Vite`

---

### T4: Definição dos tokens e interface DefaultTheme

**What**: Criar `src/theme/types.ts` com a interface `DefaultTheme` e augmentation do styled-components
**Where**: `src/theme/types.ts`
**Depends on**: T3
**Reuses**: nada
**Requirement**: UI-02

**Done when**:
- [x] `src/theme/types.ts` criado com augmentation `declare module 'styled-components'` definindo `DefaultTheme` completo (colors, typography, spacing, radii, zIndex)
- [x] Todos os campos conforme o design: `colors.primary`, `colors.primaryHover`, `colors.secondary`, `colors.secondaryHover`, `colors.text`, `colors.textMuted`, `colors.background`, `colors.surface`, `colors.border`, `colors.error`, `colors.overlay`
- [x] `npx tsc --noEmit` passa sem erros

**Tests**: none
**Gate**: build — `npx tsc --noEmit`

**Commit**: `feat(theme): define DefaultTheme interface and styled-components augmentation`

---

### T5: Implementação do defaultTheme e ThemeProvider

**What**: Criar `src/theme/defaultTheme.ts` com valores padrão e `src/theme/ThemeProvider.tsx` com deep merge
**Where**: `src/theme/defaultTheme.ts`, `src/theme/ThemeProvider.tsx`
**Depends on**: T4
**Reuses**: `src/theme/types.ts`
**Requirement**: UI-02

**Done when**:
- [x] `defaultTheme.ts` exporta objeto `defaultTheme: DefaultTheme` com todos os tokens preenchidos
- [x] `ThemeProvider.tsx` exporta `ThemeProvider` que:
  - Aceita `theme?: Partial<DefaultTheme>` e `children: React.ReactNode`
  - Faz deep merge: `{ ...defaultTheme, ...theme }` (e nested para objects)
  - Quando sem `theme` prop usa apenas `defaultTheme`
  - Envolve children com `ThemeProvider` do styled-components
- [x] `src/index.ts` exporta `ThemeProvider` e `DefaultTheme`
- [x] `.storybook/preview.tsx` atualizado para usar o `ThemeProvider` real
- [x] `npx tsc --noEmit` passa sem erros

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat(theme): implement defaultTheme tokens and ThemeProvider wrapper`

---

### T6: Componente Spinner

**What**: Criar componente `Spinner` com variantes de tamanho e cor via tema
**Where**: `src/components/Spinner/`
**Depends on**: T5
**Reuses**: `src/theme/types.ts`
**Requirement**: UI-06

**Done when**:
- [x] `Spinner.types.ts` com `SpinnerProps { size?: 'sm'|'md'|'lg', color?: string }`
- [x] `Spinner.styles.ts` com keyframe de rotação e styled component
- [x] `Spinner.tsx` implementado; usa `theme.colors.primary` como cor padrão
- [x] `src/components/Spinner/index.ts` exporta `Spinner`
- [x] `src/index.ts` exporta `Spinner`
- [x] Story `Spinner.stories.tsx` com controls de size e color
- [x] `npm run storybook` exibe a story funcionando
- [x] `npm run build` passa

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat(spinner): implement Spinner component with size and theme color`

---

### T7: Componente Button [P]

**What**: Criar componente `Button` com variantes, tamanhos, loading e disabled
**Where**: `src/components/Button/`
**Depends on**: T6
**Reuses**: `src/components/Spinner`, `src/theme/types.ts`
**Requirement**: UI-03

**Done when**:
- [x] `Button.types.ts` com `ButtonProps` (variant, size, loading + herda `React.ButtonHTMLAttributes`)
- [x] `Button.styles.ts` com styled component aplicando tokens do tema por variant e size
- [x] `Button.tsx`: quando `loading={true}` renderiza `<Spinner size="sm">` e aplica `disabled` implícito
- [x] `src/components/Button/index.ts` exporta `Button`
- [x] `src/index.ts` exporta `Button`
- [x] `Button.stories.tsx` com controls de variant, size, loading, disabled
- [x] Todos os acceptance criteria de UI-03 verificáveis via story
- [x] `npm run build` passa

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat(button): implement Button component with variants, sizes and loading state`

---

### T8: Componente Input [P]

**What**: Criar componente `Input` com label, helper text, erro e toggle de senha
**Where**: `src/components/Input/`
**Depends on**: T6
**Reuses**: `src/theme/types.ts`
**Requirement**: UI-04

**Done when**:
- [x] `Input.types.ts` com `InputProps` (label, error, helperText + herda `React.InputHTMLAttributes` sem `size`)
- [x] `Input.styles.ts` com styled components para wrapper, label, field, helper text, error message
- [x] `Input.tsx`:
  - `id` gerado via `useRef` + contador estático (compatível com React 17)
  - Quando `type="password"` renderiza botão toggle mostrar/ocultar
  - Borda vermelha quando `error` fornecido
  - `error` tem prioridade sobre `helperText`
- [x] `src/components/Input/index.ts` exporta `Input`
- [x] `src/index.ts` exporta `Input`
- [x] `Input.stories.tsx` com controls de label, error, helperText, disabled, type
- [x] `npm run build` passa

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat(input): implement Input component with label, error and password toggle`

---

### T9: Componente Modal [P]

**What**: Criar componente `Modal` com portal, backdrop, header e footer opcionais
**Where**: `src/components/Modal/`
**Depends on**: T6
**Reuses**: `src/theme/types.ts`
**Requirement**: UI-05

**Done when**:
- [x] `Modal.types.ts` com `ModalProps` (isOpen, onClose?, title?, footer?, children)
- [x] `Modal.styles.ts` com styled components para overlay, container, header, body, footer
- [x] `Modal.tsx`:
  - Renderiza via `ReactDOM.createPortal(content, document.body)`
  - Quando `isOpen={false}` retorna `null`
  - Quando `isOpen={true}` adiciona `document.body.style.overflow = 'hidden'`
  - Cleanup: remove `overflow` quando fecha ou unmount
  - Listener `keydown` para Escape chama `onClose?.()`
  - Clique no overlay chama `onClose?.()`, clique no container não propaga
- [x] `src/components/Modal/index.ts` exporta `Modal`
- [x] `src/index.ts` exporta `Modal`
- [x] `Modal.stories.tsx` com botão que controla `isOpen`, opções de title e footer
- [x] `npm run build` passa

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat(modal): implement Modal component with portal, backdrop and keyboard close`

---

### T10: Publicação no GitHub Packages [P]

**What**: Configurar `.npmrc`, `package.json` e GitHub Actions workflow para publicar no GitHub Packages
**Where**: `.npmrc`, `package.json`, `.github/workflows/publish.yml`
**Depends on**: T6
**Reuses**: nada
**Requirement**: UI-01

**Done when**:
- [x] `.npmrc` criado com `@OWNER:registry=https://npm.pkg.github.com` (OWNER = usuário/org GitHub a definir)
- [x] `package.json` com campo `"publishConfig": { "registry": "https://npm.pkg.github.com" }`
- [x] `.github/workflows/publish.yml` criado que:
  - Dispara em push de tag `v*`
  - Roda `npm run build`
  - Publica via `npm publish` usando `NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}`
- [x] Instruções de instalação documentadas no `README.md` (`.npmrc` necessário no projeto consumidor)

**Tests**: none
**Gate**: build — `npm run build` (publish real requer tag; validar apenas configuração)

**Commit**: `chore: configure GitHub Packages publishing workflow`

---

### T11: Barrel export e validação final do build

**What**: Garantir que `src/index.ts` exporta todos os componentes e tipos corretamente, e que o build está limpo
**Where**: `src/index.ts`
**Depends on**: T7, T8, T9, T10
**Reuses**: todos os componentes
**Requirement**: UI-01

**Done when**:
- [x] `src/index.ts` exporta: `ThemeProvider`, `DefaultTheme` (type), `Button`, `ButtonProps` (type), `Input`, `InputProps` (type), `Modal`, `ModalProps` (type), `Spinner`, `SpinnerProps` (type)
- [x] `npm run build` gera `dist/index.js`, `dist/index.mjs`, `dist/index.d.ts` sem warnings
- [x] `dist/index.d.ts` contém todas as exportações acima
- [x] `react` e `styled-components` não aparecem bundlados (verificar com `cat dist/index.mjs | grep "from 'react'"` — deve mostrar import externo, não código inline)

**Tests**: none
**Gate**: build — `npm run build`

**Commit**: `feat: finalize public API barrel exports`

---

### T12: Teste de integração em projeto React externo

**What**: Instalar a lib localmente via `npm link` ou `file:` em um projeto React 17+ e verificar que todos os componentes funcionam
**Where**: Projeto React externo do usuário
**Depends on**: T11
**Reuses**: nada
**Requirement**: UI-01, UI-02, UI-03, UI-04, UI-05

**Done when**:
- [ ] `npm link` ou `"lib-dieguin": "file:../lib-dieguin"` funciona sem erros
- [ ] `import { ThemeProvider, Button, Input, Modal, Spinner } from 'lib-dieguin'` resolve com tipos
- [ ] `<Button variant="primary">Teste</Button>` renderiza na tela
- [ ] `<ThemeProvider theme={{ colors: { primary: 'red' } }}>` muda a cor do Button
- [ ] `<Modal isOpen={true}>` renderiza com backdrop
- [ ] `<Input label="Email" error="Obrigatório" />` exibe label e mensagem de erro
- [ ] Nenhum erro de TypeScript no projeto consumidor

**Tests**: none (manual)
**Gate**: manual — verificação visual no browser

**Commit**: `test: validate integration in React 17 consumer project`

---

### T13: Teste de integração em projeto Next.js 14+

**What**: Instalar a lib em projeto Next.js 14 App Router e verificar compatibilidade (incluindo caveat RSC)
**Where**: Projeto Next.js externo do usuário
**Depends on**: T12
**Reuses**: nada
**Requirement**: UI-01

**Done when**:
- [ ] Lib instalada no projeto Next.js sem erros
- [ ] Componentes funcionam em Client Components (`"use client"`)
- [ ] Tentativa de usar em Server Component gera erro claro (comportamento esperado — documentar)
- [ ] `ThemeProvider` funciona em `layout.tsx` com `"use client"`
- [ ] Nenhum erro de hidratação no console

**Tests**: none (manual)
**Gate**: manual — verificação visual + console limpo

**Commit**: `test: validate integration in Next.js 14 App Router consumer project`

---

### T14: README com instruções de instalação e uso

**What**: Escrever `README.md` com instalação, configuração do `.npmrc`, uso básico e caveat do RSC
**Where**: `README.md`
**Depends on**: T13
**Reuses**: nada
**Requirement**: UI-01, UI-02

**Done when**:
- [ ] Seção de instalação: como configurar `.npmrc` para GitHub Packages + `npm install @diego-af/lib-dieguin`
- [ ] Seção de uso básico: exemplo com `ThemeProvider` + `Button`
- [ ] Seção de theming: como customizar tokens
- [ ] Seção de compatibilidade: Node.js >= 22.12.0, React >= 17, Next.js >= 14
- [ ] Aviso sobre Styled Components em RSC (deve usar `"use client"`)
- [ ] Link para o Storybook (quando publicado)

**Tests**: none
**Gate**: none

**Commit**: `docs: add README with installation, usage and theming guide`

---

## Parallel Execution Map

```
Phase 1 (Sequential — Scaffold):
  T1 ──→ T2 ──→ T3

Phase 2 (Sequential — Theme):
  T3 ──→ T4 ──→ T5 ──→ T6

Phase 3 (Parallel — Componentes):
  T6 complete, então:
    ├── T7 [P]  Button
    ├── T8 [P]  Input        } Todos independentes entre si
    ├── T9 [P]  Modal
    └── T10 [P] GitHub Packages config

Phase 4 (Sequential — Integração):
  T7+T8+T9+T10 complete, então:
    T11 ──→ T12 ──→ T13 ──→ T14
```

---

## Task Granularity Check

| Task | Escopo | Status |
|------|--------|--------|
| T1: Scaffold | 1 configuração (package.json + tsconfig) | ✅ Granular |
| T2: tsup config | 1 arquivo de build | ✅ Granular |
| T3: Storybook | 1 ferramenta configurada | ✅ Granular |
| T4: DefaultTheme types | 1 arquivo de tipos | ✅ Granular |
| T5: defaultTheme + ThemeProvider | 2 arquivos coesos (dados + wrapper) | ✅ OK — coesos |
| T6: Spinner | 1 componente | ✅ Granular |
| T7: Button | 1 componente | ✅ Granular |
| T8: Input | 1 componente | ✅ Granular |
| T9: Modal | 1 componente | ✅ Granular |
| T10: GitHub Packages | 1 concern (publish config) | ✅ Granular |
| T11: Barrel export | 1 arquivo | ✅ Granular |
| T12: Integração React | 1 ambiente de teste | ✅ Granular |
| T13: Integração Next.js | 1 ambiente de teste | ✅ Granular |
| T14: README | 1 documento | ✅ Granular |

---

## Diagram-Definition Cross-Check

| Task | Depends on (task body) | Diagrama mostra | Status |
|------|------------------------|-----------------|--------|
| T1 | None | Início | ✅ |
| T2 | T1 | T1 → T2 | ✅ |
| T3 | T2 | T2 → T3 | ✅ |
| T4 | T3 | T3 → T4 | ✅ |
| T5 | T4 | T4 → T5 | ✅ |
| T6 | T5 | T5 → T6 | ✅ |
| T7 [P] | T6 | T6 → T7 | ✅ |
| T8 [P] | T6 | T6 → T8 | ✅ |
| T9 [P] | T6 | T6 → T9 | ✅ |
| T10 [P] | T6 | T6 → T10 | ✅ |
| T11 | T7, T8, T9, T10 | T7+T8+T9+T10 → T11 | ✅ |
| T12 | T11 | T11 → T12 | ✅ |
| T13 | T12 | T12 → T13 | ✅ |
| T14 | T13 | T13 → T14 | ✅ |

---

## Test Co-location Validation

Projeto greenfield sem `TESTING.md` definido. Lib de UI — a verificação primária é via build (`tsc --noEmit`) e Storybook visual. Testes unitários com Jest/Testing Library são candidatos para v2.

| Task | Camada criada | Requer teste | Task diz | Status |
|------|---------------|-------------|----------|--------|
| T1–T3 | Config/infra | none | none | ✅ |
| T4–T6 | Theme system | none (sem lógica de negócio) | none | ✅ |
| T7–T9 | Componentes UI | none (validação via Storybook + build) | none | ✅ |
| T10 | CI config | none | none | ✅ |
| T11–T14 | Integração/docs | none (manual) | none | ✅ |

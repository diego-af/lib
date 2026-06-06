# lib-dieguin

**Vision:** Biblioteca de componentes React reutilizáveis, publicada via npm (GitHub Packages), com suporte a theming configurável e compatibilidade garantida com Node.js 22.12.0+, React e Next.js.

**For:** Desenvolvedores front-end que precisam de componentes UI consistentes em múltiplos projetos React/Next.js.

**Solves:** Eliminação de reescrita de componentes UI básicos (botões, inputs, modais) a cada novo projeto, garantindo consistência visual e comportamental via sistema de temas configuráveis.

---

## Goals

- Publicar pacote npm instalável via `npm install lib-dieguin` a partir do GitHub Packages
- Prover componentes UI genéricos (Button, Input, Modal e derivados) prontos para uso em React e Next.js
- Suportar theming configurável via ThemeProvider (tokens de cor, tipografia, spacing)
- Garantir compatibilidade com Node.js >= 22.12.0, React >= 17, Next.js >= 14

## Tech Stack

**Core:**

- Language: TypeScript 5.x
- Framework: React >= 17
- Build tool: Rollup ou tsup (bundle ESM + CJS)
- Styling: Styled Components (com suporte a theming via ThemeProvider)
- Node.js: >= 22.12.0

**Key dependencies:**

- `styled-components` — estilização e theming
- `react` / `react-dom` — peerDependencies
- `typescript` — tipagem estrita
- `storybook` — documentação e sandbox visual
- `tsup` ou `rollup` — empacotamento da lib

## Scope

**v1 includes:**

- Estrutura base do projeto (monorepo ou single-package)
- Sistema de theming: ThemeProvider + tokens padrão (cores, tipografia, spacing)
- Componentes UI core: Button, Input, Modal, Spinner
- Storybook configurado com stories para cada componente
- Build otimizado com exports ESM e CJS
- Publicação no GitHub Packages via npm
- Integração validada em projeto React/Next.js externo

**Explicitly out of scope:**

| Feature | Reason |
|---------|--------|
| Componentes de formulário com validação (React Hook Form etc.) | v2 |
| Tabelas / DataTable | v2 |
| Hooks utilitários | v2 |
| Temas múltiplos pré-definidos (dark mode automático) | v2 |
| CLI para scaffolding de componentes | v2 |
| Site de documentação (além do Storybook) | v2 |

## Constraints

- Timeline: não definida
- Technical: Node.js >= 22.12.0; peerDependencies não devem ser bundladas (React, ReactDOM)
- Resources: desenvolvedor solo

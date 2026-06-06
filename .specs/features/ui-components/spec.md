# UI Components — Especificação

## Problem Statement

Projetos React e Next.js recorrentemente precisam reimplementar os mesmos componentes básicos (Button, Input, Modal, Spinner), gerando inconsistência visual e retrabalho. A `lib-dieguin` resolve isso fornecendo esses componentes prontos, tipados, com suporte a theming e publicados como pacote npm.

## Goals

- [ ] Disponibilizar componentes UI genéricos instaláveis via `npm install lib-dieguin`
- [ ] Garantir compatibilidade com React >= 17 e Next.js >= 14 (App Router)
- [ ] Prover sistema de theming que permita customização de tokens sem alterar o código da lib

## Out of Scope

| Feature | Reason |
|---------|--------|
| Validação de formulários integrada | v2 — aumenta dependências |
| Animações complexas (framer-motion) | v2 — fora do escopo UI core |
| Acessibilidade avançada (ARIA completo) | Melhoria contínua pós v1 |
| SSR rendering direto sem Provider | Limitação do Styled Components |

---

## User Stories

### P1: Instalação e importação do pacote ⭐ MVP

**User Story**: Como desenvolvedor, quero instalar a lib com um único comando e importar componentes diretamente, para que eu possa usá-los sem configuração complexa.

**Why P1**: Sem isso, nenhum outro componente pode ser usado.

**Acceptance Criteria**:

1. WHEN o desenvolvedor executa `npm install lib-dieguin` THEN o pacote SHALL ser instalado sem erros no Node.js >= 22.12.0
2. WHEN o desenvolvedor escreve `import { Button } from 'lib-dieguin'` THEN o TypeScript SHALL resolver os tipos automaticamente
3. WHEN o pacote é importado num projeto Next.js 14+ App Router THEN SHALL funcionar sem configuração adicional no `next.config`
4. WHEN o bundle é importado THEN SHALL disponibilizar exports ESM e CJS

**Independent Test**: Criar projeto React do zero, instalar a lib, renderizar `<Button>Teste</Button>` e ver o botão na tela.

---

### P1: ThemeProvider e tokens padrão ⭐ MVP

**User Story**: Como desenvolvedor, quero envolver minha aplicação com um ThemeProvider para que todos os componentes da lib usem meu tema personalizado.

**Why P1**: Sem theming, a lib não tem diferencial — qualquer componente inline resolveria.

**Acceptance Criteria**:

1. WHEN o desenvolvedor envolve a app com `<ThemeProvider theme={meuTema}>` THEN todos os componentes filhos SHALL utilizar os tokens do tema fornecido
2. WHEN nenhum ThemeProvider é fornecido THEN os componentes SHALL utilizar o tema padrão sem erros
3. WHEN o desenvolvedor passa um tema parcial THEN os tokens não fornecidos SHALL cair back para os defaults
4. WHEN o tema é alterado em runtime THEN os componentes SHALL re-renderizar com os novos tokens

**Independent Test**: Renderizar `<Button>` dentro e fora do ThemeProvider; verificar que a cor muda conforme o tema.

---

### P1: Componente Button ⭐ MVP

**User Story**: Como desenvolvedor, quero usar um componente Button com variantes e estados, para que eu tenha consistência nos botões de toda a aplicação.

**Why P1**: É o componente de interação mais básico e universal.

**Acceptance Criteria**:

1. WHEN `variant="primary"` THEN o botão SHALL usar a cor primária do tema
2. WHEN `variant="secondary"` THEN o botão SHALL usar a cor secundária do tema
3. WHEN `variant="ghost"` THEN o botão SHALL ser transparente com borda
4. WHEN `size="sm" | "md" | "lg"` THEN o botão SHALL ajustar padding e font-size conforme token
5. WHEN `disabled={true}` THEN o botão SHALL ser não-clicável e visualmente distinto
6. WHEN `loading={true}` THEN o botão SHALL exibir Spinner e bloquear cliques
7. WHEN o botão recebe `onClick` THEN SHALL executar o handler apenas quando não estiver disabled/loading

**Independent Test**: Story no Storybook com controles para variant, size, disabled, loading.

---

### P1: Componente Input ⭐ MVP

**User Story**: Como desenvolvedor, quero um componente Input acessível com label e mensagem de erro, para que os formulários da aplicação sejam consistentes.

**Why P1**: Inputs são usados em praticamente toda aplicação.

**Acceptance Criteria**:

1. WHEN `label` é fornecido THEN SHALL renderizar label associado ao input via `htmlFor`
2. WHEN `error` é fornecido THEN o input SHALL ter borda vermelha e exibir a mensagem de erro abaixo
3. WHEN `disabled={true}` THEN o input SHALL ser não-editável e visualmente distinto
4. WHEN `type="password"` THEN SHALL incluir toggle para mostrar/ocultar senha
5. WHEN `helperText` é fornecido THEN SHALL exibir texto auxiliar abaixo do input (sem estado de erro)
6. WHEN o usuário digita THEN SHALL propagar o evento `onChange` normalmente

**Independent Test**: Story com controles para label, error, disabled, helperText.

---

### P1: Componente Modal ⭐ MVP

**User Story**: Como desenvolvedor, quero um componente Modal controlado externamente, para que eu possa exibir conteúdo sobreposto de forma consistente.

**Why P1**: Modal é padrão em quase todo app.

**Acceptance Criteria**:

1. WHEN `isOpen={true}` THEN o modal SHALL ser exibido com backdrop
2. WHEN `isOpen={false}` THEN o modal SHALL estar completamente oculto (sem DOM desnecessário)
3. WHEN o usuário clica no backdrop THEN SHALL chamar `onClose` (se fornecido)
4. WHEN o usuário pressiona `Escape` THEN SHALL chamar `onClose`
5. WHEN `title` é fornecido THEN SHALL renderizar um header com o título
6. WHEN `footer` é fornecido THEN SHALL renderizar um footer com o conteúdo passado
7. WHEN o modal está aberto THEN o scroll do body SHALL ser bloqueado

**Independent Test**: Story com botão que abre/fecha o modal; verificar backdrop e tecla Escape.

---

### P2: Componente Spinner

**User Story**: Como desenvolvedor, quero um Spinner visual para indicar estados de carregamento.

**Why P2**: Útil mas pode ser substituído pelo loading do Button no MVP.

**Acceptance Criteria**:

1. WHEN `<Spinner />` é renderizado THEN SHALL exibir animação de loading
2. WHEN `size="sm" | "md" | "lg"` THEN SHALL ajustar o tamanho
3. WHEN `color` não é fornecido THEN SHALL usar a cor primária do tema

**Independent Test**: Story com controles de tamanho e cor.

---

### P2: Documentação Storybook

**User Story**: Como desenvolvedor que descobre a lib, quero navegar pelos componentes no Storybook, para que eu entenda como usar cada um sem ler código.

**Why P2**: Acelera adoção mas não bloqueia uso da lib.

**Acceptance Criteria**:

1. WHEN o Storybook é iniciado THEN SHALL listar todos os componentes na sidebar
2. WHEN o desenvolvedor seleciona um componente THEN SHALL ver stories com controles interativos (Storybook Controls)
3. WHEN o desenvolvedor altera um controle THEN o componente SHALL atualizar em tempo real

**Independent Test**: Rodar `npm run storybook` e navegar por todos os componentes.

---

## Edge Cases

- WHEN a lib é importada em Next.js sem `"use client"` em Server Components THEN SHALL retornar erro claro (Styled Components não funciona em RSC)
- WHEN o ThemeProvider recebe `theme={}` (objeto vazio) THEN SHALL usar todos os tokens do tema padrão sem crash
- WHEN `Button` recebe `children` nulo/undefined THEN SHALL renderizar botão vazio sem erros
- WHEN `Modal` é aberto sem `onClose` THEN SHALL funcionar sem crash (só não chamará handler)

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
|----------------|-------|-------|--------|
| UI-01 | P1: Instalação e importação | Design | Pending |
| UI-02 | P1: ThemeProvider e tokens | Design | Pending |
| UI-03 | P1: Button | Design | Pending |
| UI-04 | P1: Input | Design | Pending |
| UI-05 | P1: Modal | Design | Pending |
| UI-06 | P2: Spinner | - | Pending |
| UI-07 | P2: Storybook | - | Pending |

**Coverage:** 7 total, 0 mapeados para tasks, 7 pendentes

---

## Success Criteria

- [ ] `npm install lib-dieguin` funciona num projeto React limpo
- [ ] `npm install lib-dieguin` funciona num projeto Next.js 14+ App Router
- [ ] Todos os 4 componentes core renderizam corretamente com tema padrão
- [ ] ThemeProvider sobreescreve visual de todos os componentes corretamente
- [ ] Storybook documenta todos os componentes com controls interativos
- [ ] Bundle final tem tamanho razoável (< 100kb minificado sem peerDeps)

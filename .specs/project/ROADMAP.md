# Roadmap — lib-dieguin

## v1.0.0 — Foundation (MVP)

**Objetivo:** Lib publicável, componentes core funcionando com theming, documentação via Storybook.

### Milestone 1 — Estrutura do Projeto

- [ ] Scaffold do repositório (package.json, tsconfig, eslint, prettier)
- [ ] Configuração do build (tsup: ESM + CJS + .d.ts)
- [ ] Configuração do Storybook
- [ ] GitHub Packages: configuração de publicação (.npmrc, workflow CI)

### Milestone 2 — Sistema de Theming

- [ ] Definição dos design tokens (cores, tipografia, spacing, border-radius)
- [ ] ThemeProvider com tema padrão
- [ ] Suporte a tema customizado pelo consumidor
- [ ] Story: ThemeProvider usage

### Milestone 3 — Componentes UI Core

- [ ] Button (variantes: primary, secondary, ghost; tamanhos: sm, md, lg; estados: loading, disabled)
- [ ] Input (tipos: text, password, email; estados: error, disabled; label + helper text)
- [ ] Modal (backdrop, close button, slots: header/body/footer)
- [ ] Spinner (tamanhos, cor via tema)
- [ ] Stories para cada componente

### Milestone 4 — Integração e Publicação

- [ ] Testar instalação em projeto React externo
- [ ] Testar instalação em projeto Next.js 14+ (App Router)
- [ ] Publicar v1.0.0 no GitHub Packages
- [ ] README com instruções de instalação e uso básico

---

## v2.0.0 — Expansion (Planejado)

- Componentes de formulário com validação integrada
- DataTable com paginação
- Hooks utilitários (useTheme, useMediaQuery, useDisclosure)
- Dark mode automático via prefers-color-scheme
- Múltiplos temas pré-definidos
- Site de documentação (Docusaurus ou similar)

---

## Decisões em Aberto

| Decisão | Opções | Prazo |
|---------|--------|-------|
| Repositório GitHub (org/user) | A definir | Antes da publicação |
| Estratégia de versionamento | Semver manual vs semantic-release | Milestone 4 |
| Monorepo (turborepo) vs single-package | A avaliar na fase de design | Milestone 1 |

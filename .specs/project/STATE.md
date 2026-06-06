# State — lib-dieguin

_Memória persistente do projeto: decisões, bloqueios, lições, TODOs, ideias adiadas._

---

## Decisions

| ID | Decision | Rationale | Date |
|----|----------|-----------|------|
| D-01 | Styled Components como engine de estilo | Suporta theming via ThemeProvider nativamente; familiar para o time | 2026-06-06 |
| D-02 | Instalação única (single package) | Reduz overhead de versionamento; adequado para v1 | 2026-06-06 |
| D-03 | Storybook para documentação | Sandbox visual + documentação viva sem custo de site separado | 2026-06-06 |
| D-04 | Node.js >= 22.12.0 como requisito mínimo | Alinhado com LTS mais recente; sem suporte a versões antigas | 2026-06-06 |
| D-05 | React >= 17 como requisito mínimo | Suporte a projetos legados que ainda usam React 17 | 2026-06-06 |

---

## Blockers

_(nenhum no momento)_

---

## Lessons

_(nenhuma registrada ainda)_

---

## Todos

- [ ] Definir repositório GitHub (org ou usuário pessoal)
- [ ] Decidir entre tsup e rollup como bundler
- [ ] Avaliar necessidade de monorepo (turborepo) para separar lib do playground

---

## Deferred Ideas

| Idea | Why Deferred | Revisit When |
|------|-------------|--------------|
| CLI para scaffolding de componentes | Fora do escopo v1 | v2 |
| Dark mode automático | Aumenta complexidade do theming | v2 |
| Semantic-release para CI/CD de versões | Setup mais complexo | Milestone 4 |

---

## Preferences

_(nenhuma registrada ainda)_

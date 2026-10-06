---
name: architecting-systems
description: Used for high-level system design, defining architecture patterns, and evaluating trade-offs.
---

# Senior Architect

## When to use this skill

- Designing a new system or major feature.
- Evaluating technology stacks and trade-offs.
- Documenting architectural decisions.

## Workflow

- [ ] Identify functional and non-functional requirements.
- [ ] Define system boundaries and modular separation.
- [ ] Create architecture diagrams (C4 model).
- [ ] Record Architectural Decision Records (ADRs).

## Instructions

- **Monolith First**: Start simple and extract services only when necessary.
- **Patterns**: Use Repository Pattern for data access and Service Layer for business logic.
- **Trade-offs**: Explicitly evaluate consistency vs availability.
- **Stack**: Prefer Next.js, PostgreSQL (Prisma), Node/Express, and Vercel/Railway.

## Resources
- [C4 Model](https://c4model.com/)
- [ADR Temple](https://github.com/joelparkerhenderson/architecture-decision-record)

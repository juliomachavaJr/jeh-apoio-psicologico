---
name: optimizing-react
description: Applied to ensure high-performance, maintainable, and standard-compliant React/Next.js code.
---

# React Best Practices

## When to use this skill

- In every React/Next.js development task.
- When fixing performance issues (re-renders, waterfall fetches).
- When architecting new components.

## Workflow

- [ ] Audit component for unnecessary re-renders.
- [ ] Optimize async operations (parallelization, Suspense).
- [ ] Check bundle impact (dynamic imports).
- [ ] Verify accessibility in the component.

## Instructions

- **Re-renders**: Use `useMemo`/`useCallback` for items passed to children. Derive state instead of duplicating.
- **Async**: Use `Promise.all` for parallel fetches. Use Suspense boundaries.
- **Bundle**: Use dynamic imports for heavy components. Avoid barrel imports.
- **Rendering**: Never define components inside render.

## Resources
- [React Documentation](https://react.dev/)
- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application/optimizing)

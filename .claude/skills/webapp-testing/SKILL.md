---
name: testing-webapps
description: Applied for testing web applications, verifying UI flows, and debugging with tools like Playwright.
---

# WebApp Testing

## When to use this skill

- Testing frontend functionality and UI.
- Debugging complex user flows.
- Verifying responsive behavior and screenshots.

## Workflow

- [ ] Start the local dev server.
- [ ] Initialize testing tool (e.g., Playwright).
- [ ] Record or write test scripts for key flows.
- [ ] Verify results and capture screenshots if needed.

## Instructions

- **Playwright**: Always wait for `networkidle`.
- **Selectors**: Prefer `data-testid`, then `role`, then text. CSS/XPath as last resort.
- **Reporting**: Generate summaries of test results.

## Resources
- [Playwright Docs](https://playwright.dev/)
- [Testing Library](https://testing-library.com/)

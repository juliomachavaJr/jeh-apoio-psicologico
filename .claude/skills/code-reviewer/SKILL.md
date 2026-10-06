---
name: reviewing-code
description: Applied when performing code reviews, analyzing PRs, and checking code quality.
---

# Code Reviewer

## When to use this skill

- Reviewing Pull Requests.
- Auditing code quality and performance.
- Checking for security vulnerabilities and anti-patterns.

## Workflow

- [ ] Verify logic correctness and error handling.
- [ ] Check for security vulnerabilities (SQLi, XSS).
- [ ] Audit performance (N+1 queries, re-renders).
- [ ] Ensure maintainability and naming standards.

## Instructions

- **Correctness**: Check edge cases and race conditions.
- **Security**: Sanitize inputs, avoid sensitive data in logs.
- **Performance**: Optimize hot paths and assets.
- **Anti-patterns**: No `any` type, no `console.log` in production, no magic numbers.

## Resources
- [Google Engineering Practices](https://github.com/google/eng-practices)
- [SonarLint Rules](https://rules.sonarsource.com/)

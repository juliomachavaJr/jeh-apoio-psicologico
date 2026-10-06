---
name: helping-with-commits
description: Applied when generating commit messages and following Conventional Commits standards.
---

# Git Commit Helper

## When to use this skill

- Whenever writing a commit message.
- Reviewing staged changes before committing.

## Workflow

- [ ] Run `git status` and `git diff --staged`.
- [ ] Determine the commit type (feat, fix, docs, etc.).
- [ ] Write a concise summary and optional body.
- [ ] Commit the changes.

## Instructions

- **Format**: `<type>(<scope>): <short desc>`.
- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`.
- **Rules**: Imperative mood, max 50 chars for summary, no period at end.

## Resources
- [Conventional Commits](https://www.conventionalcommits.org/)

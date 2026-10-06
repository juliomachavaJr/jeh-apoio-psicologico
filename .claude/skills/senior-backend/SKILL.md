---
name: developing-backend
description: Applied for professional backend development, API design, and database management.
---

# Senior Backend

## When to use this skill

- Building and designing APIs.
- Managing database migrations and queries.
- Implementing authentication and security measures.

## Workflow

- [ ] Design API endpoints (RESTful) and contracts.
- [ ] Validate all inputs (Zod, Joi).
- [ ] Optimize database queries (indexing, N+1 analysis).
- [ ] Implement robust error handling and security headers.

## Instructions

- **APIs**: Use correct HTTP verbs, semantic status codes, and versioning.
- **Validation**: Never trust client data; validate at the edge.
- **Database**: Use indices, avoid N+1 queries, and use forward-only migrations.
- **Security**: Sanitize inputs, use parameterized queries, and keep secrets in `.env`.

## Resources
- [Prisma Documentation](https://www.prisma.io/docs/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

# 06. Route Handlers (`app/api/**/route.ts`)

## Concepts

- Export `GET`, `POST`, `PUT`, `PATCH`, `DELETE`… taking a Web `Request` and returning a `Response`/`NextResponse`.
- Use them for webhooks, public/mobile APIs, file downloads, and anything called by third parties; use Server Actions for your own UI mutations.
- Return correct status codes (400 bad JSON, 422 validation, 201 created) and validate the body.
- Handlers are plain functions, so they are easy to unit test (see `app/api/posts/route.test.ts`).

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/06-route-handlers
```

## Interview questions
- How are Route Handlers cached under Cache Components?
- How do you read dynamic params in a handler?
- Why test handlers as plain functions?

## Exercises
1. Add `GET /api/posts/[id]` returning 404 when missing.
1. Add a webhook handler that verifies an HMAC signature.

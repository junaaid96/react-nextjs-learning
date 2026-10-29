# 09. Deployment

## Concepts

- **Vercel**: import the repo, set the root directory to `04-nextjs`, add `SESSION_SECRET`; PPR, `'use cache'` and image optimisation work out of the box.
- **Docker / self-hosting**: set `output: 'standalone'` in `next.config.ts`, then `node .next/standalone/server.js`; configure a shared cache handler if you run several instances.
- Checklist: `npm run build` locally, env vars validated at startup, `next start` behind a reverse proxy with compression, security headers, and monitoring (OpenTelemetry/`instrumentation.ts`).
- Each deploy starts with a fresh cache (the build id is part of cache keys).

## Run

```bash
npm run dev -w 04-nextjs   # then open http://localhost:3000/09-deployment
```

## Interview questions
- What does `output: 'standalone'` produce?
- What changes when you run more than one instance?
- How do you manage secrets per environment?

## Exercises
1. Write a multi-stage Dockerfile for this app.
1. Add `instrumentation.ts` that logs startup.

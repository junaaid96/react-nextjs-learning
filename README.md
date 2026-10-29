# React & Next.js Learning Path

A hands-on path from **modern JavaScript** through **TypeScript** and **React 19** to **Next.js 16**. Every lesson has a concept guide, commented runnable code, tests, interview questions and exercises.

| Stack | Version |
|---|---|
| Node.js | 22.12+ (LTS) |
| JavaScript | ES2025 |
| TypeScript | 6.0 (strict) |
| React | 19.3 |
| Next.js | 16.4 (App Router, Cache Components) |
| Tests | `node:test`, Vitest 5, React Testing Library |

## Website

Read every lesson, with its source and tests embedded, plus search and dark mode at **[junaaid96.github.io/react-nextjs-learning](https://junaaid96.github.io/react-nextjs-learning/)**. The site is built from this repo's Markdown by [`website/`](website/) and redeploys on every push to `main`. The `legacy/` folder is not part of the site.

## Quick start

```bash
npm install          # installs all workspaces
npm test             # runs every lesson's tests
npm run typecheck    # strict TypeScript in 02, 03 and 04
npm run build        # production build of the Next.js app
npm run dev -w 04-nextjs
```

## Learning path

| Step | Folder | You will learn |
|---|---|---|
| 1 | [`01-javascript`](01-javascript/) | Scope & closures, `this`, classes & prototypes, iterators & generators, async & the event loop, ES2025 features, modules & errors, browser APIs |
| 2 | [`02-typescript`](02-typescript/) | Inference, unions & narrowing, generics, utility/mapped/conditional types, runtime validation, typed classes & DI |
| 3 | [`03-react`](03-react/) | Components & props, state, effects & refs, context + reducer, custom hooks, React 19 Actions, Suspense & `use()`, performance, component patterns |
| 4 | [`04-nextjs`](04-nextjs/) | Routing, Server vs Client Components, streaming, `'use cache'`, Server Actions & forms, Route Handlers, auth with `proxy.ts`, metadata & errors, deployment |

Suggested pace: one lesson a day. Read the README, run the tests, break something on purpose, then do the exercises.

### Lesson format

```
NN-topic/
├── README.md        concepts, interview questions, exercises
├── index.(js|ts|tsx) commented example code
└── index.test.*     tests that document the behaviour
```

## More

- [Best practices](docs/BEST_PRACTICES.md)
- [Interview questions](docs/INTERVIEW_QUESTIONS.md)
- [Legacy notes and PDFs](legacy/) from the first version of this repo (React Router, Zustand, React Query, CSS, performance, tooling)
- [Contributing](CONTRIBUTING.md)

## License

[MIT](LICENSE) © 2026 Md. Junaidul Islam

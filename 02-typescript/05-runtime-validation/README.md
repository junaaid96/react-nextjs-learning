# 05. Runtime validation & type-safe APIs

## Concepts

- Types disappear at runtime: data from `fetch`, forms, env vars and `JSON.parse` is `unknown` until validated.
- In real apps use a schema library (Zod, Valibot, ArkType) that **infers** the TS type from the schema. This lesson builds a tiny one so you see the idea.
- Return a `Result` instead of throwing for expected failures.
- **Branded types** (`string & { __brand: 'Email' }`) stop you mixing up values that share a primitive type.

## Run

```bash
npx -w 02-typescript vitest run 05-runtime-validation
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- Why do you need runtime validation in a typed codebase?
- What is a branded type?
- How does a schema library infer types?

## Exercises
1. Add `array(validator)` and `optional(validator)`.
1. Validate `process.env` at startup.

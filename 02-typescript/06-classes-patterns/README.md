# 06. Classes, interfaces & typed patterns

## Concepts

- `implements` checks a class against an interface; `abstract` classes share behaviour.
- Access modifiers (`private`, `protected`, `readonly`) are compile-time; `#private` is runtime-enforced.
- Typed dependency injection: depend on an interface, inject the implementation (easy to test).
- Typed event emitter shows how mapped types make APIs safe.

## Run

```bash
npx -w 02-typescript vitest run 06-classes-patterns
```

Code: [`index.ts`](index.ts) · Tests: [`index.test.ts`](index.test.ts)

## Interview questions
- `private` vs `#private`?
- Abstract class vs interface?
- How does DI help testing?

## Exercises
1. Add an `SmsNotifier`.
1. Make `TypedEmitter.on` return an unsubscribe function.

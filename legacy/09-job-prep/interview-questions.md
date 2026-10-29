# Quick Reference: Common Interview Questions

## React

**Q: What is the Virtual DOM?**
A: A lightweight JS representation of the DOM. On state change, React diffs virtual DOM and updates only changed nodes in the real DOM, reducing expensive DOM operations.

**Q: Why do we need keys in lists?**
A: Keys help React identify which items changed, were added, or removed. Use stable, unique IDs—avoid array index for dynamic lists (reordering breaks).

**Q: Explain useEffect cleanup.**
A: Return a function from useEffect. It runs before next effect or on unmount. Use for: unsubscribing, clearing timers, aborting fetches to prevent memory leaks and updates on unmounted components.

**Q: Controlled vs Uncontrolled?**
A: Controlled: value comes from state, onChange updates state. Uncontrolled: DOM holds value, use ref to read. Controlled preferred for most forms.

**Q: What is reconciliation?**
A: React's algorithm to diff two trees and apply minimal updates. Keys help it match elements across renders.

---

## Next.js

**Q: SSR vs SSG vs CSR?**
A: SSR = render on each request (dynamic). SSG = render at build (static, fast). CSR = render in browser (SPA). Use SSR for personalized content, SSG for marketing/blog, CSR for dashboards.

**Q: When to use getServerSideProps vs getStaticProps?**
A: getServerSideProps = data changes per request (user-specific). getStaticProps = same for all users, can be built once (or with ISR).

**Q: Server vs Client Components (App Router)?**
A: Server: default, no hooks/events, can fetch directly, smaller bundle. Client: `'use client'`, hooks, interactivity. Push Client to leaf when possible.

---

## JavaScript

**Q: Explain closures.**
A: Function + its lexical scope. Inner function "remembers" outer scope even after outer returns.

**Q: Event loop?**
A: Call stack executes sync code. Async callbacks go to task queue. Microtasks (Promises) run before next macrotask. Loop: run stack → run microtasks → run one macrotask → repeat.

**Q: this keyword?**
A: Depends on how function is called: method (obj), call/apply/bind, constructor (new), arrow (inherits from enclosing scope).

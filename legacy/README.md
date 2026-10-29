> **Legacy notes.** This is the first version of the repo, kept for reference. The maintained, tested lessons live in the root workspaces (see the [main README](../README.md)).

# React & Next.js Learning Path 🚀

> A structured learning guide for 6sense HQ Limited job preparation and beyond.

## 📚 How to Use This Guide

- **Each folder** contains a focused topic with README notes and code examples
- **Study in order** – concepts build on each other
- **Run examples** – most include runnable code
- **Practice** – try modifying examples and building small projects

## 📂 Folder Structure

```
react-nextjs-learning/
├── 00-javascript-es6/          # Prerequisite: Modern JavaScript
├── 01-core-react/              # React fundamentals
│   ├── 01-components-props/
│   ├── 02-hooks/
│   ├── 03-state-management/
│   ├── 04-component-patterns/
│   └── 05-react-router/
├── 02-nextjs/                  # Next.js specific
│   ├── 06-rendering-strategies/
│   ├── 07-app-router/
│   ├── 08-nextjs-features/
│   └── 09-data-fetching/
├── 03-css-styling/
│   └── 10-modern-css/
├── 04-performance/
│   ├── 11-react-performance/
│   └── 12-nextjs-performance/
├── 05-forms/
│   └── 13-form-handling/
├── 06-typescript/
│   └── 14-typescript-react/
├── 07-testing/
│   └── 15-testing/
├── 08-build-deploy/
│   └── 16-dev-tools/
└── 09-job-prep/                # Interview & project ideas
```

## ⏱️ Suggested Timeline (6-Week Plan)

| Week | Focus | Folders |
|------|-------|---------|
| 1-2 | Core fundamentals | 00, 01 |
| 3-4 | Next.js & advanced React | 02, 03 |
| 5-6 | Production skills | 04, 05, 06, 07, 08 |

## 🎯 Job-Specific Priorities (6sense)

1. **React Query** – Server state, caching, mutations
2. **Next.js** – Rendering strategies, App Router
3. **Component architecture** – Clean, reusable patterns
4. **API integration** – REST, error handling, loading states
5. **Responsive UI** – Tailwind, mobile-first

---

## ❓ How This Maps to the PDFs

The **Most Used & Asked Topics in React/Next.js** PDFs are fully covered across these folders:

- Core React (components, hooks, state, patterns, router)
- Next.js (rendering strategies, App Router, features, data fetching)
- CSS & styling (Tailwind, CSS Modules, Styled Components, responsive design)
- Performance (React + Next.js)
- Forms, TypeScript, Testing, Dev Tools, Job Prep

Each topic README now includes:
- **Why** the topic matters
- **Where** it’s used in real apps
- **Interview-style Q&A** with explanations
- **Practice exercises** or project-style tasks

Use this repo as a **question–answer + example notebook**: read a topic, answer the Q&A out loud, then implement the practice items in your own sandbox or Next.js project.

## Quick Start

```bash
# Create Next.js project for practice
npx create-next-app@latest my-practice-app --typescript --tailwind --app

# Run examples in each folder
cd 01-core-react/02-hooks && npm run dev  # if applicable
```

Happy learning! 🎓

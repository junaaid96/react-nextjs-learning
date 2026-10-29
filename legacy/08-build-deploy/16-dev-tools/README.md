# Development Tools

> Vite, Webpack basics, ESLint, Prettier, Git workflows.

## Vite

Fast dev server (ESM, no bundling in dev). Great for React projects.

```bash
npm create vite@latest my-app -- --template react-ts
```

```json
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

---

## Webpack Basics

- **Entry** – starting point
- **Output** – where to emit bundles
- **Loaders** – transform files (babel, css)
- **Plugins** – broader tasks (HtmlWebpackPlugin)

Next.js abstracts this; useful to understand for custom setups.

---

## ESLint

```bash
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks
npx eslint --init
```

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
```

---

## Prettier

```bash
npm install -D prettier eslint-config-prettier
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2
}
```

Integrate with ESLint: `extends: ['prettier']` to avoid conflicts.

---

## Git Workflows

- **Branching:** `main` + feature branches (`feature/add-login`)
- **Commits:** Conventional (feat:, fix:, chore:)
- **PRs:** Small, focused; request review
- **Conflicts:** Rebase or merge; communicate with team

---

## Why Dev Tools & Workflows Matter

- Tools like Vite, ESLint, Prettier, and Git workflows directly affect **developer productivity and code quality**.
- Interviews (especially senior/lead) often include questions about **how you structure projects, enforce quality, and collaborate**.

---

## Where These Tools Fit in a Real Project

- **Vite**: fast local dev for React/TS playgrounds and smaller apps.
- **Webpack concepts**: useful to understand bundlers and how Next.js works under the hood.
- **ESLint**: enforces rules (hooks, imports, best practices).
- **Prettier**: automatic, consistent formatting across the team.
- **Git workflows**: branch strategies, PR etiquette, and code review culture.

---

## Interview Q&A

### Q1: How do you keep a large React/Next.js codebase consistent?

You can mention:
- ESLint + Prettier integrated into CI and pre-commit hooks.
- Shared component library and patterns (naming, folder structure).
- Code review checklists focusing on readability, tests, and performance.

---

### Q2: What is the benefit of using a formatter like Prettier?

- Removes debates about style.
- Makes diffs smaller and easier to review.
- Keeps focus on logic and architecture, not tabs vs spaces.

---

### Q3: How do you structure branches for features and bugfixes?

Example:
- `main` (or `master`) is always deployable.
- Feature branches: `feature/<name>`.
- Bugfix branches: `fix/<ticket-id>`.
- Release or hotfix branches if needed.

---

## Quick Practice

- **Exercise 1**: Initialize ESLint + Prettier in a small project and connect them to your editor.
- **Exercise 2**: Set up a pre-commit hook (e.g. using Husky) to lint and format files before commit.
- **Exercise 3**: Practice creating a feature branch, making a PR, and writing a clear description + checklist.


# Contributing

1. Use Node 22.12+ (`nvm use`) and run `npm install` at the repo root.
2. Create a branch: `git checkout -b feat/<topic>`.
3. New lessons go in the right workspace as `NN-topic/` with `README.md` (Concepts, Run, Interview questions, Exercises), commented code and tests.
4. Before opening a PR, run:
   ```bash
   npm run typecheck && npm test && npm run build
   ```
5. Keep examples small, focused and dependency-free where possible. Explain *why* in comments, not just *what*.
6. Commit messages: `feat: …`, `fix: …`, `docs: …`, `chore: …`.

const lessons = (ls, track, sub = '') => [`${track}/README.md`,
  ...ls(`${track}${sub}`).filter((d) => /^\d\d-/.test(d)).map((d) => `${track}${sub}/${d}/README.md`)];
export default {
  repo: 'react-nextjs-learning',
  short: 'React & Next.js Learning',
  gh: 'https://github.com/junaaid96/react-nextjs-learning',
  title: 'Modern JavaScript, TypeScript, React 19 and Next.js 16',
  description: 'Learning path: modern JavaScript, TypeScript, React 19 and Next.js 16 with runnable, tested lessons, concept guides and interview questions.',
  code: { '.js': 'js', '.mjs': 'js', '.ts': 'ts', '.tsx': 'tsx', '.jsx': 'jsx' },
  embed: (dir) => /^0\d-[a-z]+\/(app\/)?\d\d-/.test(dir),
  recursive: () => true,
  groups: [
    { title: '01 · JavaScript', pages: (ls) => lessons(ls, '01-javascript') },
    { title: '02 · TypeScript', pages: (ls) => lessons(ls, '02-typescript') },
    { title: '03 · React 19', pages: (ls) => lessons(ls, '03-react') },
    { title: '04 · Next.js 16', pages: (ls) => lessons(ls, '04-nextjs', '/app') },
    { title: 'Guides', pages: () => ['docs/BEST_PRACTICES.md', 'docs/INTERVIEW_QUESTIONS.md', 'CONTRIBUTING.md'] },
  ],
  nav: [
    { text: 'Learning path', link: '/' },
    { text: 'JavaScript', link: '/01-javascript/' },
    { text: 'TypeScript', link: '/02-typescript/' },
    { text: 'React', link: '/03-react/' },
    { text: 'Next.js', link: '/04-nextjs/' },
    { text: 'Interview Q&A', link: '/docs/INTERVIEW_QUESTIONS/' },
  ],
  hero: `hero:
  name: "react-nextjs-learning"
  text: "JavaScript, TypeScript, React 19 and Next.js 16"
  tagline: "31 tested lessons, each with a concept guide, interview questions, exercises and the full source embedded."
  actions:
    - theme: brand
      text: Start with JavaScript
      link: /01-javascript/
    - theme: alt
      text: Interview questions
      link: /docs/INTERVIEW_QUESTIONS/
    - theme: alt
      text: View on GitHub
      link: https://github.com/junaaid96/react-nextjs-learning
features:
  - title: JavaScript
    details: Scope and closures, this, classes, iterators, the event loop, ES2025 and browser APIs.
    link: /01-javascript/
  - title: TypeScript
    details: Narrowing, generics, utility and mapped types, runtime validation and class patterns.
    link: /02-typescript/
  - title: React 19
    details: State, effects, context, custom hooks, Actions, Suspense, use() and patterns.
    link: /03-react/
  - title: Next.js 16
    details: App Router, Server Components, caching, Server Actions, route handlers, auth and deployment.
    link: /04-nextjs/
`,
};

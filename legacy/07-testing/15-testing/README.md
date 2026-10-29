# Testing Libraries

> Jest, React Testing Library, E2E with Cypress/Playwright.

## Jest

Unit test runner. Matchers, mocks, snapshots.

```js
// sum.test.js
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// Mock
jest.mock('./api');
```

---

## React Testing Library

Test components from user perspective. Queries: getByRole, getByLabelText, getByText.

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('button click calls handler', async () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  await userEvent.click(screen.getByRole('button', { name: /click/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

**Principles:**
- Query by accessible attributes (role, label)
- Avoid implementation details
- User-event over fireEvent when possible

---

## Cypress / Playwright (E2E)

End-to-end tests in real browser.

**Playwright:**
```js
test('login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name=email]', 'user@example.com');
  await page.fill('[name=password]', 'secret');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL('/dashboard');
});
```

---

## Testing Best Practices

1. Test behavior, not implementation
2. Use `getByRole` first (accessibility)
3. Mock API calls
4. One assert per test (or related asserts)
5. Descriptive test names

---

## Why Testing Matters

- Prevents regressions when refactoring or adding features.
- Gives confidence to ship faster, especially in a team.
- Interviewers look for **testing mindset**: what to test and at which level (unit, integration, E2E).

---

## Where Each Tool Fits

- **Jest**: unit tests for utilities, hooks (with testing libs), and component logic.
- **React Testing Library**: component tests focused on **behavior and accessibility**.
- **Cypress/Playwright**: full end-to-end flows in a real browser (login, checkout).

---

## Interview Q&A (with Examples)

### Q1: What’s the difference between unit, integration, and E2E tests?

- **Unit**: single function/component in isolation.
- **Integration**: multiple components/modules working together (e.g. form + API client).
- **E2E**: full user flow in real/realistic environment.

Good answer:
> I aim for a strong base of unit/integration tests and a smaller number of high-value E2E tests.

---

### Q2: Why does React Testing Library discourage testing implementation details?

Because:
- Tests should be resilient to internal refactors.
- The user doesn’t care about component structure, only behavior and accessibility.

You query by **role, label, text**, not by internal class names or component names.

---

### Q3: How do you test components that call APIs?

- Extract API logic into a separate module and **mock it** with Jest.
- For React Query, use a `QueryClientProvider` in tests and mock `queryFn`s.

---

### Q4: What common mistakes do people make with testing?

- Over-mocking or testing implementation details.
- Flaky E2E tests due to race conditions.
- Not cleaning up or resetting state between tests.

---

## Quick Practice

- **Exercise 1**: Write unit tests for a pure function (e.g. `calculateCartTotal`).
- **Exercise 2**: Test a form component with React Testing Library (fill inputs, submit, assert callbacks).
- **Exercise 3**: Write a Playwright/Cypress test for a login flow.
- **Exercise 4**: Refactor a component and verify tests still pass without changing them (good tests are resilient).


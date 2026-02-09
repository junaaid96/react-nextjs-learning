/**
 * React Testing Library example
 *
 * Install: npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
 *
 * Run: npm test
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} aria-label="submit">
      {children}
    </button>
  );
}

describe("Button", () => {
  test("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /submit/i })).toHaveTextContent(
      "Click me"
    );
  });

  test("calls onClick when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

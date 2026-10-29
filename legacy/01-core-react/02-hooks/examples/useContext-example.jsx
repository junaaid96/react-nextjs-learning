/**
 * useContext - Share values without prop drilling
 *
 * Key learnings:
 * - createContext(default) for type/value
 * - Provider wraps tree, value is shared
 * - useContext(MyContext) to consume
 * - Often used with useState for "global" state
 */

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");
const ThemeUpdateContext = createContext(() => {});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);
  return { theme, toggleTheme };
}

// Usage in any nested component
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-theme={theme}>
      Current: {theme}
    </button>
  );
}

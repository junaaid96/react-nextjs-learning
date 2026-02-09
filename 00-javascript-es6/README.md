# JavaScript ES6+ Fundamentals

> **Prerequisite** – Master these before React. Modern JavaScript is the foundation.

## Topics

### 1. Arrow Functions

```javascript
// Traditional
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;

// Single param - parentheses optional
const double = x => x * 2;

// No `this` binding - inherits from parent scope (important in React!)
```

**When to use:** Arrow functions in React for event handlers and callbacks – they don't rebind `this`.

---

### 2. Destructuring

```javascript
// Object destructuring
const user = { name: 'John', age: 30 };
const { name, age } = user;

// Array destructuring
const [first, second] = [1, 2, 3];

// React props - very common!
const UserCard = ({ name, age }) => <div>{name}</div>;

// Renaming
const { name: userName } = user;
```

---

### 3. Promises & async/await

```javascript
// Promise
fetch('/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// async/await (preferred in React)
async function fetchUsers() {
  try {
    const res = await fetch('/api/users');
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

---

### 4. Array Methods (map, filter, reduce)

```javascript
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
];

// map - transform each element (used for rendering lists in React!)
const names = users.map(u => u.name);  // ['Alice', 'Bob']

// filter - select elements
const activeUsers = users.filter(u => u.active);

// reduce - accumulate value
const total = [1, 2, 3].reduce((acc, n) => acc + n, 0);  // 6
```

**React tip:** `map` is how you render lists. Always provide a unique `key` prop.

---

### 5. Spread & Rest Operators

```javascript
// Spread - copy/merge
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };  // { a: 1, b: 2 }

const arr1 = [1, 2];
const arr2 = [...arr1, 3];  // [1, 2, 3]

// Rest - gather remaining
const [first, ...rest] = [1, 2, 3];  // rest = [2, 3]
function sum(...nums) { return nums.reduce((a, b) => a + b); }
```

**React tip:** Spread used for immutable updates: `setState({ ...prev, count: prev.count + 1 })`

---

### 6. Modules (import/export)

```javascript
// Named export
export const PI = 3.14;
export function add(a, b) { return a + b; }

// Default export
export default function App() {}

// Import
import App from './App';
import { add, PI } from './utils';
import * as utils from './utils';
```

---

## Practice Exercises

1. Convert a for-loop to `map`/`filter`/`reduce`
2. Destructure nested objects
3. Write async/await for a fetch call with error handling
4. Use spread to update object state immutably

---

## Why ES6+ Matters for React & Next.js

- **All modern React/Next.js code assumes ES6+** – imports, arrow functions, destructuring, and promises are everywhere.
- **Cleaner, more expressive syntax** makes components and hooks easier to read and reason about.
- **Immutability helpers** (spread, rest, array methods) are essential for safe state updates.
- **Async/await & promises** are the backbone of data fetching, API calls, and React Query/Next.js server code.

---

## Where You Use These Features

- **Arrow functions**: event handlers, callbacks in `.map`, hook callbacks (`useEffect`, `useState` updaters).
- **Destructuring**: props, state objects, API responses (`const { data, error } = useQuery(...)`).
- **Array methods**: rendering lists, filtering tables, summarizing data on dashboards.
- **Spread/rest**: updating React state, merging config objects, combining props.
- **Modules**: sharing components, hooks, and utilities across pages and features.

---

## Interview Q&A (with Examples)

### Q1: Why should state updates be immutable in React?

Because React relies on **reference changes** to detect updates. Mutating an object or array in place keeps the same reference, so React may not detect a change and skip re-rendering.

```javascript
// ❌ Bad: mutates
state.items.push(newItem);
setState(state);

// ✅ Good: new reference
setState(prev => ({
  ...prev,
  items: [...prev.items, newItem],
}));
```

---

### Q2: How do `map`, `filter`, and `reduce` show up in real React code?

- `map` – render lists.
- `filter` – implement search/filter UIs.
- `reduce` – compute totals, counts, aggregates.

```javascript
// Render list in React
const items = products
  .filter(product => product.inStock)
  .map(product => <ProductCard key={product.id} product={product} />);
```

---

### Q3: What is the difference between `==` and `===`? Which should you use in React code?

- `==` performs **type coercion** before comparison.
- `===` compares **both type and value** without coercion.

In React/Next.js (and in general), prefer `===` to avoid surprising coercion bugs, especially in conditionals that trigger rendering.

---

### Q4: How does async/await improve readability over raw promises?

It lets you write asynchronous code in a **top-down, synchronous style**, which makes React data-fetching functions and API utilities clearer:

```javascript
// Promise style
fetch('/api/users')
  .then(res => res.json())
  .then(users => setUsers(users))
  .catch(console.error);

// async/await style
async function loadUsers() {
  try {
    const res = await fetch('/api/users');
    const users = await res.json();
    setUsers(users);
  } catch (error) {
    console.error(error);
  }
}
```

---

## Extra Practice (Interview-Oriented)

1. Implement a small utility that:
   - Takes an array of cart items and returns **total quantity** and **total price** using `reduce`.
2. Given a nested API response, use **destructuring** to pull out only what a component needs.
3. Rewrite a callback-heavy function to use **async/await** and proper `try/catch` error handling.
4. Take an object with nested data and write an **immutable update** that changes only one deeply nested field using spread.

## Most Asked DSA / Problem-Solving Topic

### Two Sum (Hash Map Pattern)

**Question:**  
Given an array of integers `nums` and an integer `target`, return **indices** of the two numbers such that they add up to `target`.  
You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

This is one of the most frequently asked DSA questions and introduces a key **pattern**: using a **hash map (object / `Map`) to trade space for time**.

### Naive vs Optimal Approach

- **Naive (Brute Force):**
  - Check all pairs using two loops.
  - Time complexity: \(O(n^2)\) – too slow for large arrays.
- **Optimal (Hash Map):**
  - As you iterate, store each number's value → index in a map.
  - For each number `nums[i]`, compute its **complement**: `target - nums[i]`.
  - If the complement is already in the map, you've found the answer.
  - Time complexity: \(O(n)\), space complexity: \(O(n)\).

### JavaScript Implementation (ES6)

```javascript
/**
 * Two Sum using a hash map.
 * @param {number[]} nums - Array of integers.
 * @param {number} target - Target sum.
 * @returns {[number, number]} - Indices of the two numbers.
 */
const twoSum = (nums, target) => {
  // Map from value -> index
  const indexByValue = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    // If we've seen the complement before, return the pair of indices
    if (indexByValue.has(complement)) {
      return [indexByValue.get(complement), i];
    }

    // Otherwise, store the current value with its index
    indexByValue.set(current, i);
  }

  // In classic interview versions, we assume there is always exactly one solution.
  // In production code, you'd handle "no solution" explicitly:
  // throw new Error('No two sum solution');
  return [-1, -1];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [0, 1] because nums[0] + nums[1] === 9
```

### Why This Pattern Matters for Problem Solving

- **Core idea:** Pre-store information in a fast lookup structure (`Map` / object) to answer questions in \(O(1)\) average time.
- This **hash-map pattern** shows up in many popular DSA problems:
  - Check if an array has duplicates.
  - Find if any two numbers sum to a target (not just one pair).
  - Count frequencies (character counts in strings, word counts).
  - "First non-repeating character" in a string.
- When you see:
  - "Find pair/indices…"  
  - "Check if there exists…"  
  - "Count occurrences…"  
  think about using a **hash map** instead of nested loops.

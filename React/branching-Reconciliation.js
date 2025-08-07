// 🔁 How Does Reconciliation Work in React?
// Reconciliation is the process React uses to diff the new virtual DOM with the previous one and
// update the real DOM efficiently.

// 🧠 Key Idea:
// React uses a virtual DOM — a lightweight JavaScript object representing the real DOM. When state or props change:

// React creates a new virtual DOM tree.

// It compares it with the previous virtual DOM (diffing).

// It calculates the minimal number of changes required.

// It applies those changes to the real DOM (called DOM patching).

/** Branching in react*/
// 🔁 What is Batching in React?
// Batching means that multiple state updates are grouped together into a single re-render to improve performance.

// 🔁 How Does Batching Work in React?
// When multiple state updates are triggered, React batches them into a single re-render.
// This allows React to update the UI efficiently, reducing the number of DOM operations required.

// 🧠 Key Idea:
// React batches state updates together to reduce the number of re-renders.
// It groups multiple updates into a single re-render, and applies them all at once to the real DOM.

// 🔁 Why Use Batching in React? React 18
// Batching can improve performance by reducing the number of DOM operations required.
// It also ensures that the UI is updated efficiently, even when multiple state updates are triggered in quick succession.

// ✅ React 18: Automatic Batching Everywhere
// React 18 introduced automatic batching for all updates, even async ones:

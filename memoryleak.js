// ✅ What is a Memory Leak in JavaScript?
// 🔹 Definition:
// A memory leak occurs when memory that is no longer needed is not released.
// This happens when objects are unintentionally kept in memory even though the
// application no longer uses them.

// ✅  Common Causes of Memory Leaks
// Cause	Description
// Global variables	: Variables that stay in memory for the lifetime of the app.
// Detached DOM elements: 	DOM nodes removed from the document but still referenced in JS.
// Closures with stale references: 	Inner functions that hold onto outer scope variables.
// Uncleared timers or intervals: 	setInterval or setTimeout that is never cleared.
// Event listeners: 	Not removing listeners on destroyed elements or components.

// ✅  How to Fix Memory Leaks
// Remove event listeners using element.removeEventListener

// Clear intervals/timeouts: clearInterval, clearTimeout

// Avoid unnecessary global variables

// Nullify large objects when no longer needed

// Use weak references (e.g., WeakMap, WeakSet) when appropriate

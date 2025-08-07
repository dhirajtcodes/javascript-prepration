// ✅ How Does Garbage Collection Work in JavaScript?
// 🔹 What Is Garbage Collection?
// Garbage collection is the process where the JavaScript engine automatically
// frees up memory that is no longer in use.

// How It Works
// Most engines (like V8) use a technique called:

// Mark-and-Sweep Algorithm
// Mark phase:

// The GC starts from "root" objects (like global scope or currently running functions).

// It recursively marks all objects that are reachable.

// Sweep phase:

// All unreachable objects (not marked) are considered garbage and are removed from memory.

/**https://www.linkedin.com/pulse/mastering-javascript-asynchrony-simplifying-event-loop-shubham-khan-0k2sc/ */

// Key Phases of Event Loop (simplified):
// Call Stack: Executes synchronous code.

// Task Queue: Queues callbacks (e.g. setTimeout, I/O).

// Microtask Queue: Queues promises (.then, catch, etc.)—runs before the task queue.

// Event Loop: Keeps checking if the stack is empty, then pushes queued callbacks to the stack to run.

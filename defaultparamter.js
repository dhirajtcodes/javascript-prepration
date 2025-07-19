function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
greet(); // Output: Hello, Guest

function log({ name = "Guest", age = 0 } = {}) {
  console.log(name, age);
}

log(); // Guest 0
log({ name: "Alice" }); // Alice 0

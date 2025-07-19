data();

function data() {
  console.log(a);
  var a;
  console.log(a);
}

console.log(myVariable); // Output: undefined
var myVariable = 10;
console.log(myVariable); // Output: 10

greet("Alice"); // Output: Hello, Alice!

function greet(name) {
  console.log(`Hello, ${name}!`);
}

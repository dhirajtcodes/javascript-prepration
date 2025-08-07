// What is Prototypal Inheritance? (In Simple Terms)
// In JavaScript, objects can borrow properties and methods from other objects.
// This process is called prototypal inheritance.

// Imagine you are a student, and your friend has a calculator.
// Instead of buying a new one, you just borrow it from your friend when needed.

// In the same way, one object can borrow functions or values from another object.

const person = {
  greet() {
    console.log("Hello!");
  },
};

const student = {
  study() {
    console.log("Studying...");
  },
};

// Let student inherit from person
student.__proto__ = person;

// Now student can use both study and greet
student.study(); // Output: Studying...
student.greet(); // Output: Hello!  ✅ inherited from person

// __proto__  :	Hidden link between objects
// Object.create(obj):	Creates a new object with obj as prototype

const getData = () => {
  console.log("I ma Dhiraj");
};

const students = {
  name: "Dhiraj",
  greets() {
    console.log("greet");
  },
};

students.__proto__ = person;

students.greet();

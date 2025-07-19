// In JavaScript, every object has an internal link to another object called its prototype.

// This prototype object is also known as [[Prototype]], and it can be accessed using:

// Object.getPrototypeOf(obj); // Modern way
// obj.__proto__;              // Legacy (not recommended)

const obj = {
  greet() {
    console.log("hello");
  },
};

const create = Object.create(obj);

create.greet();

console.log(create.__proto__ === obj);

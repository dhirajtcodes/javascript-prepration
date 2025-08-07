// ✅ 1. Object.keys()

const person = { name: "Dhiraj", age: 30 };
console.log(Object.keys(person));
// Output: ["name", "age"]

// 2. Object.values()
const person2 = { name: "Dhiraj", age: 30 };
console.log(Object.values(person2));
// Output: ["Dhiraj", 30]

// ✅ 3. Object.entries()
const person3 = { name: "Dhiraj", age: 30 };
console.log(Object.entries(person3));
// Output: [["name", "Dhiraj"], ["age", 30]]

// ✅ 4. Object.fromEntries()
const entries = [
  ["name", "Dhiraj"],
  ["age", 30],
];
console.log(Object.fromEntries(entries));
// Output: { name: "Dhiraj", age: 30 }

// ✅ 5. hasOwnProperty()
const person4 = { name: "Dhiraj", age: 30 };
console.log(person4.hasOwnProperty("name")); // Output: true

// ✅ 6. for...in loop (enumerate keys)
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// ✅ 7. Object.assign()
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = Object.assign({}, obj1, obj2);
console.log(result); // { a: 1, b: 2 }

//8 : Object.freeze()
const obj3 = { a: 1 };
Object.freeze(obj3);
obj3.b = 2; // This will throw an error

//9 : Object.seal()
const obj4 = { a: 1 };
Object.seal(obj4);
obj4.b = 2;

//10 : Object.preventExtensions()
const obj5 = { a: 1 };
Object.preventExtensions(obj5);
obj5.b = 2;

//11 : Object.is()
const obj6 = { a: 1 };
const obj7 = { a: 1 };
console.log(Object.is(obj6, obj7));

//12 : object.isExtensible()
const obj8 = { a: 1 };
console.log(Object.isExtensible(obj8));

//13 : Object.setPrototypeOf()
const obj9 = { a: 1 };
const proto = { b: 2 };
Object.setPrototypeOf(obj9, proto);
console.log(obj9.b);

//14: object.isFrozen()
const obj10 = { a: 1 };
console.log(Object.isFrozen(obj10));

//15: object.isSealed()
const obj11 = { a: 1 };
console.log(Object.isSealed(obj11));

// : object.create()
const personProp = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const student = Object.create(personProp); // `person` is the prototype

student.name = "Dhiraj";
student.greet(); // Output: Hello, my name is Dhiraj

//Example of this

const person = {
  name: "Dhiraj",
  greet() {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Hello, Dhiraj ✅  (this = person)

// Call method
// 1. call() — call the function immediately with this value
const greetFunc = person.greet;
greetFunc.call(person); // ✅ Hello, Dhiraj

//Apply method
// 🔹 2. apply() — same as call(), but arguments passed as an array
function introduce(age, city) {
  console.log(`${this.name} is ${age} years old and lives in ${city}`);
}

const user = { name: "Dhiraj" };

introduce.apply(user, [25, "Nagpur"]);

// 🔹 3. bind() — does NOT call immediately, just returns a new function with this set
function welcome() {
  console.log("Welcome, " + this.name);
}

const userData = { name: "DhirajBind" };

const boundFn = welcome.bind(userData);
boundFn(); // Welcome, Dhiraj ✅

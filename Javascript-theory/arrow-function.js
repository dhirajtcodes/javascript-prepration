/** this is in arrow function */

const person = {
  name: "Dhiraj",
  greet: function () {
    setTimeout(() => {
      console.log("greet", this.name);
    }, 1000);
  },
};

console.log("person", person.greet());

console.log(typeof null);

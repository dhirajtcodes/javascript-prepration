// The this keyword in JavaScript is used to refer to the object that is
// currently executing the code. Its value is dynamic and depends on the
// context in which a function is called.

const obj = {
  name: "dhiraj",
  age: 20,
  pincode2: function () {
    console.log(this.age);
  },
  address: {
    city: "Noida",
    pincode: function () {
      console.log(this.city);
    },
  },
};

console.log("obj", obj);

obj.address.pincode();
obj.pincode2();

/** This */
//this keyword refer to window object in browser
// this keyword refers to the object that is currently executing the code.
// this keyword can be used to access properties and methods of the current object.
//this keyword can also be used to access properties and methods of the parent object.

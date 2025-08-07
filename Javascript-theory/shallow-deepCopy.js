const original = {
  name: "John",
  address: {
    city: "New York",
  },
};

const shallowCopy = { ...original };

// Modify nested object
shallowCopy.address.city = "Los Angeles";
shallowCopy.name = "Jane";

console.log(original.address.city); // Output: "Los Angeles"
console.log(shallowCopy.address.city); // Output: "Los Angeles"

console.log(original);

// shallowCopy is a new object.

// But shallowCopy.address and original.address point to the same object in memory.

/** Deep Copy */

// A deep copy creates a new object and recursively copies all nested objects so that it is completely independent from the original.

const originalDeep = {
  name: "John",
  address: {
    city: "New York",
  },
};

// Deep copy using JSON methods (works only with plain objects)
const deepCopy = JSON.parse(JSON.stringify(originalDeep));
const deepCopy2 = structuredClone(originalDeep);

// Modify nested object
deepCopy.address.city = "Los Angeles";

console.log(originalDeep.address.city); // Output: "New York"

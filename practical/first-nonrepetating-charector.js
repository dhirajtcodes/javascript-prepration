const nonRepetative = (str) => {
  const arr = [];
  const strr = str.split("");
  const obj = {};

  for (let value of str) {
    obj[value] = (obj[value] || 0) + 1;
  }

  console.log("obj", obj);

  for (let key of str) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

console.log(nonRepetative("rsrrhul"));

// Other simple solution
const firstNonRepeating = (str) => {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
};

console.log(firstNonRepeating("rsrrhul"));

const noRepetative = () => {
  for (const key of str) {
    if (str.indexOf(key) === str.lastIndexOf(key)) {
      return key;
    }
  }
};

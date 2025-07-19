/**reduce */

const arr45 = [67, 89, 56, 78];

const data = arr45.reduce((a, b) => a * b);
console.log("data", data);

/**reduce with initial value 0 always initial value of a*/
const arr = [67, 89, 56, 78];

const data2 = arr45.reduce((a, b) => a * b, 0);
console.log("data", data2);

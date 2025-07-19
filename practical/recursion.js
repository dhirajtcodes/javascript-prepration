const recurArr = [6, [7, 8, 9], [56, 78], [[67, 898, 56]]];

let flatArray = [];
const getFlatArray = (recurArr) => {
  recurArr.forEach((item) => {
    if (Array.isArray(item)) {
      getFlatArray(item);
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
};

console.log(getFlatArray(recurArr));

//Approach 2
const flatten = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );

console.log(flatten(recurArr));

/** Max number */
const sortArr = [];
const recursiveFunc = (value) => {
  value.forEach((item) => {
    if (Array.isArray(item)) {
      recursiveFunc(item);
    } else {
      sortArr.push(item);
    }
  });

  return Math.max(...sortArr);
};

console.log("recursiveFunc", recursiveFunc(recurArr));

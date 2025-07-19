const arr = [
  { name: "sai" },
  { name: "Rahul" },
  { name: "John" },
  { name: "John" },
  { name: "sai" },
]; //find uniques value from array

const uniques = [...new Set(arr.map((item) => item.name))];

console.log("unique", uniques);

///find unique pobject

const getUniqueObject = () => {
  const obj = {};
  let maxobj = null;
  arr.forEach((item) => {
    obj[item.name] = (obj[item.name] || 0) + 1;
  });

  return arr.filter((item) => obj[item.name] === 1);
};

console.log(">.", getUniqueObject());

/** Mx number in Array */

const arrData = [4535, 35, 35, 24, 36, 3543, 52];

console.log("maxNumber", Math.max(...arrData));

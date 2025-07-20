const factorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(5));

const arrFac = (arr, func) => {
  const resMap = arr.map((item) => factorial(item));
  return resMap;
};

console.log(arrFac([1, 2, 3, 4, 5, 6], factorial));

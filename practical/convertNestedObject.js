// write a function that convert the string input into an object

// {"a,b,c": "someValue"}   to {a:{b:{c:"somevalue"}}}

const getConvertArray = (input) => {
  let arr = null;
  for (let key in input) {
    const keys = key.split(",");
    arr = keys.map((item) => {
      return { [item]: input[key] };
    });

    arr.forEach((item) => {});
  }

  return arr;
};

console.log(getConvertArray({ "a,b,c": "someValue" }));

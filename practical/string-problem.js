/** Find the longest word */

const str = "I am asssssssssssssssssss Dhiraj Tandulkar ";

const functi = () => {
  const data = str.split(" ");

  let maxCount = 0;
  let key = null;
  data.forEach((item) => {
    if (item.length > maxCount) {
      maxCount = item.length;
      key = item;
    }
  });

  return { maxCount, key };
};

console.log(functi());

/** lagest number in array */

const arr = [4, 324, 2, 2312, 4, 113];

console.log(Math.max(...arr));

/** get the array as paramter an return even number array */

const noSortArr = [6, 1212, 56, 34, 54, 33, 21, 90];

const getEvenArray = (value) => {
  const evenArr = [];

  value.map((item) => {
    if (item % 2 < 1) {
      evenArr.push(item);
    }
  });
  console.log("evenr", evenArr);
};

getEvenArray(noSortArr);

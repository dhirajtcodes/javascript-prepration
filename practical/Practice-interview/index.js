/** Reverse Array without Array */
// const getReverseArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;

//     start++;
//     end--;
//   }

//   console.log("arr", arr);
// };

// getReverseArray([5, 232, 5, 3, 62, 5, 3]);
// ----------------------------------------------------------------
/** Palidrone stromng */

const getPalindrome = (data) => {
  if (!data.length) return false;

  const splitStr = data.toLowerCase().split("").reverse().join("");

  return splitStr === data;
};

console.log(getPalindrome("raar"));

/** Duplicate from Array */

const removeDuplicate = (arr) => {
  const duplicate = [...new Set(arr)];

  //   console.log("duplicate 1", duplicate);

  const duplicate2 = arr.filter((item, index) => arr.indexOf(item) === index);
  //   console.log("duplicate 2", duplicate2);
};

removeDuplicate([6, 4, 1, 3, 5, 2, 5, 6, 2, 1]);

// ------------------------------------------------------------------------------------

/** Flatten the nested array */

const newArr = [];
const getFlattenArray = (arr) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      getFlattenArray(item);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

getFlattenArray([4, 5, 3, [5, 6, 7], [5, [5, 6], 7, 8]]);

/** Find the first non-repeating character  */

const getFirstNonRepeatingCharacter = (str) => {
  const splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr.indexOf(splitStr[i]) === splitStr.lastIndexOf(splitStr[i])) {
      return splitStr[i];
    }
  }

  return null;
};

getFirstNonRepeatingCharacter("rrshhrcct");
// ------------------------------------------------------------------------------------

/**Merge two sorted arrays  */

const arr1 = [1, 356, 5];
const arr2 = [2, 4, 6];

const mergeTwoSortArray = () => {
  /** Simple Approch */
  const newArr = [...arr1, ...arr2]; // arr1.concat(arr2)
  const sortArr = newArr.sort((a, b) => a - b);

  //   console.log(sortArr);

  /*Comple Approch without predefin method */

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length - 1; j++) {
      const temp = newArr[j];
      newArr[j] = newArr[j + 1];
      newArr[j + 1] = temp;
    }
  }

  //   console.log("newArr", newArr);
};

mergeTwoSortArray();

// ------------------------------------------------------------------------------------

/** Find the Missing Number in an Array from 1 to N */

// Example : I wrote but having time complex and
const findMissingNumber = (arr) => {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  console.log("ma", maxNumber, minNumber);

  const isFilter = Array.from({ length: maxNumber }, (_, index) => {
    if (minNumber <= index + 1) return index + 1;
  });

  const lengthArr = isFilter.filter((item) => typeof item === "number");

  console.log("lengthArr", lengthArr);
  for (let i = 0; i < lengthArr.length; i++) {
    if (!arr.includes(lengthArr[i])) {
      return lengthArr[i];
    }
  }
};

console.log(findMissingNumber([4, 6, 3, 7, 8]));

/** Optimize Version of above function */

const findMissingNumber2 = (arr) => {
  const numSet = new Set(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  for (let i = min; i <= max; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }
  return null;
};

console.log(findMissingNumber2([4, 6, 3, 7, 8]));
// ------------------------------------------------------------------------------------

/** Group Anagrams from a List of Strings */

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

const str = ["eat", "tea", "tan", "ate", "nat", "bat"];

const getAnagrams = (str) => {
  const map = new Map();

  console.log("map", map);

  for (let words of str) {
    const sorted = words.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(words);
    } else {
      map.set(sorted, [words]);
    }
  }

  return Array.from(map.values());
};

console.log(getAnagrams(str));

// --------------------------------------------------------

const debounce = (fn, delay) => {
  let timer;

  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(arg), delay);
  };
};

const handleSearch = debounce((query) => fetchSearchData(query), 3000);

// --------------------------------------------------------

const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...arg) => {
    const now = new Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...arg);
    }
  };
};

const handleSeahanld = throttle((query) => fetchSearchData(query), 3000);

/** Deep Clone of object */

const person = {
  name: "dhiraj",
  age: 50,
  greet: function () {
    console.log("Hello");
  },
  address: { city: "nagpur" },
};

const deepCopy = JSON.parse(JSON.stringify(person));

// const deepCopy2 = structuredClone(person);
// const copy = structuredClone(person);

deepCopy.age = 60;

console.log("person", person);
console.log("person", deepCopy);

/** Find intersection of two array*/

const arr45 = [1, 2, 3, 4];
const arr56 = [3, 4, 5, 6];

const interSectionArry = arr45.filter((item) => arr56.includes(item));

console.log("interSectionArry", interSectionArry);

/** ============================================================================================== */
/** Count character frequency in a string  */

const strin = "aehxmcsmsdsadsaxcxzw";

const getNumberOfCharector = () => {
  const obj = {};

  for (let value of strin) {
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
  }

  let maxCount = 0;
  let key = null;

  for (let value in obj) {
    if (maxCount < obj[value]) {
      maxCount = obj[value];
      key = value;
    }
  }

  console.log("maxValue", maxCount, key);
};

getNumberOfCharector();

/**  */

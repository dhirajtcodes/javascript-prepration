const items = [
  { type: "vegetable", name: "carrot", price: 1.5 },

  { type: "vegetable", name: "potato", price: 0.8 },

  { type: "vegetable", name: "carrot", price: 1.2 },

  { type: "fruit", name: "apple", price: 1.0 },

  { type: "vegetable", name: "broccoli", price: 2.0 },

  { type: "fruit", name: "apple", price: 1.5 },

  { type: "vegetable", name: "spinach", price: 1.2 },

  { type: "vegetable", name: "tomato", price: 1.0 },
];

// O/p:- {

//     vegetable: {

//         carrot: 2.7,

//         potato: 0.8,

//         broccoli: 2.0,

//         spinach: 1.2,

//         tomato: 1.0

//     },

//     fruit: {

//         apple: 2.5

//     }

// }

// const getSortedArray = (arr) => {
//   const obj = {};

//   arr.forEach((item) => {
//     const { type, name, price } = item;

//     if (!obj[type]) {
//       obj[type] = {};
//     }

//     if (obj[type][name]) {
//       obj[type][name] += price;
//     } else {
//       obj[type][name] = price;
//     }
//   });

//   return obj;
// };

// const getReduceArray = (arr) => {
//   return arr.reduce((result, { type, name, price }) => {
//     result[type] = result[type] ?? {};
//     result[type][name] = (result[type][name] || 0) + price;
//     return result;
//   }, {});
// };

// console.log(getReduceArray(items));

/** ===========================  Question 2 ===================================== */

// output is like :{ David: [ 25, 30 ], Bob: [ 30, 35 ], Charlie: [ 25 ] }

const people = [
  { name: "David", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 25 },

  { name: "David", age: 30 },

  { name: "Bob", age: 35 },
];

const getSort = (arr) => {
  const obj = {};
  arr.forEach((item) => {
    // { name: "Bob", age: 35 },
    const { name, age, pep } = item;

    if (!obj[name]) {
      obj[name] = [];
    }

    // if (!obj[name][pep]) {
    //   obj[name][pep] = age;
    // }

    if (obj[name]) {
      obj[name].push(age);
    }
  });

  return obj;
};

console.log(getSort(people));

/** ===========================  Question 3 ===================================== */

const products = [
  { name: "Laptop", category: "Electronics", brand: "Brand A", price: 1200 },

  { name: "Phone", category: "Electronics", brand: "Brand B", price: 800 },

  { name: "Tablet", category: "Electronics", brand: "Brand A", price: 600 },

  { name: "Shirt", category: "Clothing", brand: "Brand C", price: 50 },

  { name: "Pants", category: "Clothing", brand: "Brand C", price: 70 },

  { name: "Shoes", category: "Clothing", brand: "Brand D", price: 100 },

  { name: "Headphones", category: "Electronics", brand: "Brand A", price: 200 },
];

const getSortedTreeStructure = (arr) => {
  const obj = {};

  arr.forEach((item) => {
    const { name, category, brand, price } = item;

    if (!obj[category]) {
      obj[category] = {};
    }

    if (!obj[category][brand]) {
      obj[category][brand] = {};
    }
    if (!obj[category][brand].products) {
      obj[category][brand].products = [];
    }

    obj[category][brand].products.push(item);
    obj[category][brand].totalPrice = price;
  });

  return obj;
};

console.log(getSortedTreeStructure(products));

// {

//     Electronics: {

//         'Brand A': [

//             { name: 'Laptop', category: 'Electronics', brand: 'Brand A' },

//             { name: 'Tablet', category: 'Electronics', brand: 'Brand A' }

//         ],

//         'Brand B': [

//             { name: 'Phone', category: 'Electronics', brand: 'Brand B' }

//         ]

//     },

//     Clothing: {

//         'Brand C': [

//             { name: 'Shirt', category: 'Clothing', brand: 'Brand C' },

//             { name: 'Pants', category: 'Clothing', brand: 'Brand C' }

//         ],

//         'Brand D': [

//             { name: 'Shoes', category: 'Clothing', brand: 'Brand D' }

//         ]

//     }

// }

/** ===========================  Question 4 ===================================== */

const arr = [1, 2, 0, 4, 3, 0, 5, 0];

//    [1,2,4,3,5,0,0,0]

const getValue = (arr) => {
  const remail = [];

  const sortArr = arr.filter((item) => {
    if (item > 0) {
      return item;
    } else {
      remail.push(item);
    }
  });
  return sortArr.concat(remail);
};

console.log(getValue(arr));

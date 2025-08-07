const getPromise = async () => {
  const data = [
    {
      name: "dhiraj",
      age: 50,
    },
  ];

  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(data);
    } else {
      reject("Not Good");
    }
  });
};

getPromise()
  .then((res) => console.log("Heloo wor"))
  .catch((error) => error);

/** Promise all */

// Runs all promises in parallel.

// If all promises resolve → returns an array of results.

// If any promise rejects → immediately rejects with that error.

const promise1 = () => {
  return new Promise((resolve) =>
    setTimeout(() => console.log("Hello1"), 2000)
  );
};

const promise2 = () => {
  return new Promise((resolve) =>
    setTimeout(() => console.log("Hello2"), 3000)
  );
};

Promise.all[(promise1, promise2)]
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/** Promise.allSettled() — Wait for all, even if some fail */

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Another success");

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
});

// Output
[
  { status: "fulfilled", value: "Success" },
  { status: "rejected", reason: "Failed" },
  { status: "fulfilled", value: "Another success" },
];

// Promise.race() — Returns first settled promise

// Returns the first promise to settle — either resolve or reject.

// As soon as any promise resolves or rejects, the result is returned.

// ⚠️ If the first one rejects, the entire race fails.

const p5 = new Promise((res) => setTimeout(() => res("First"), 1000));
const p6 = new Promise((res) => setTimeout(() => res("Second"), 2000));

Promise.race([p5, p6]).then((result) => {
  console.log(result); // "First"
});

/** Promise.any() — Returns first fulfilled promise (ignores rejections) */

// Returns the first fulfilled (resolved) promise.

// Ignores all rejections.

// ⚠️ Only fails if all promises reject.

const p8 = Promise.reject("Fail 1");
const p9 = Promise.reject("Fail 2");
const p0 = Promise.resolve("Success!");

Promise.any([p8, p9, p0]).then((result) => {
  console.log(result); // "Success!"
});

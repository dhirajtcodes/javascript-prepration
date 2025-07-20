/** WRITE A function is numbe ris prime or not */

const checkPrimeNumber = (value) => {
  if (value <= 1) return false;

  for (let i = 2; i < Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

console.log("checkPrimie", checkPrimeNumber(49));

const primeNumber = (number) => {
  if (value <= 1) return false;

  for (i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

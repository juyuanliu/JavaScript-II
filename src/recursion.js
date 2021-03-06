// Complete the following functions.

const nFibonacci = (n) => {
  if (n <= 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false

  const index = 0;
  const objArray = Object.values(obj);

  const testFunction = (arr, i) => {
    while (i < arr.length - 1) {
      if (arr[i] !== arr[++i]) {
        return false;
      }
      return testFunction(arr, i++);
    }
    return true;
  };
  return testFunction(objArray, index);
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves,
};

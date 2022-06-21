const PHI = (1 + Math.sqrt(5)) / 2;

/**
 * Is the given integer a square number (i.e. the square root has no decimal places)?
 */
const isPerfectSquare = (num = 0) => Math.sqrt(num) % 1 === 0;

/**
 * Is the given integer a part of the Fibonacci sequence?
 */
const isFibonacci = (num = 0) =>
  isPerfectSquare(5 * Math.pow(num, 2) + 4) ||
  isPerfectSquare(5 * Math.pow(num, 2) - 4);

/**
 * If the given number is a member of the Fibonacci sequence
 * return the Fibonacci number that precedes the given integer.
 * If it is not a Fibonacci number, return -1
 */
const getPreviousFibonacci = (num = 0) => {
  if (!isFibonacci(num)) return -1;

  let prev = 0;
  let curr = 1;
  let next = prev + curr;

  if (num === prev || num === curr) return 0;

  while (next <= num) {
    if (next === num) return curr;
    prev = curr;
    curr = next;
    next = prev + curr;
  }

  return -1; // This is for type safety, we never reach this return
};

// console.log(getPreviousFibonacci(1)); // 0
// console.log(getPreviousFibonacci(5)); // 3
// console.log(getPreviousFibonacci(35)); // -1
// console.log(getPreviousFibonacci(987)); // 610

// But instead of counting all those numbers, we can use MATH!
const prevFibonacci = (num = 0) => {
  return isFibonacci(num) ? Math.round(num / PHI) : -1;
};

console.log(prevFibonacci(987));

/**
 * Given two integers, generate a “fibonacci-like” sequence of n digits
 * (where the next number in the pattern is the sum of the previous two numbers).
 * Extra credit: Given a sequence, determine if the sequence is “fibonacci-like”.
 */

const fibLike = (first = 0, second = 1, length = 2) => {
  let result = [first, second];
  for (let index = result.length; index < length; index++) {
    result.push(result[index - 2] + result[index - 1]);
  }
  return result;
};

const n = 5;
console.log(fibLike(10, 20, n)); // [10, 20, 30, 50, 80]
console.log(fibLike(3, 7, n)); // [3, 7, 10, 17, 27]

// EXTRA CREDIT!
const isFibLike = (arr = []) => {
  if (!arr || arr.length < 2) return false;
  return fibLike(arr[0], arr[1], arr.length).every((num, i) => num === arr[i]);
};

console.log(isFibLike([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])); // true
console.log(isFibLike([0, 1, 1, 2, 3, 5, 8, 12, 21, 34])); // false
console.log(isFibLike([1])); // false
console.log(isFibLike([3, 7])); // true
console.log(isFibLike([3, 7, 10])); // true

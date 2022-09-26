const lowest = (nums = []) => Math.min(...nums);

const highest = (nums = []) => Math.max(...nums);

const clamp = (num = 0, min = 0, max = 100) =>
  Math.min(Math.max(num, min), max);

const numbers = [0, 1, 2, 3];

console.log(lowest(numbers));
console.log(highest(numbers));
console.log(numbers.map((number) => clamp(number, 1, 2)));

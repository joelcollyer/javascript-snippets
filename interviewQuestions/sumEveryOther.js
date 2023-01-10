/**
 * Prompt: Given a number, sum every second digit in that number.
 */

const sumEveryOther = (num = 0) => {
  return (
    num
      .toString()
      // Remove non numeric characters
      .replace(/[^0-9]+/g, "")
      .split("")
      // Filter out every other number
      .filter((_, index) => (index + 1) % 2 === 0)
      // Sum the remaining numbers
      .reduce((sum, digit) => (sum += +digit), 0)
  );
};

console.log(sumEveryOther(548915381)); // 26 = 4+9+5+8
console.log(sumEveryOther(10)); // 0
console.log(sumEveryOther(1010.11)); // 1 = 0+0+1

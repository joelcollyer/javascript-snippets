/**
 * Prompt: Print the digits 0 through 100 without using the characters
 * 1, 2, 3, 4, 5, 6, 7, 8, or 9 in your code. Get creative!
 */

const maxChars = "000";

const countToOneHundred = () => {
  const output = [];

  while (true) {
    output.push(output.length);
    const lastChar = [...output].pop()?.toString() ?? "";
    if (lastChar.length === maxChars.length) break;
  }

  return output.join(", ");
};

console.log(countToOneHundred());

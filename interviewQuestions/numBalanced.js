/**
 * Prompt: Given a string of parenthesis, return the number of parenthesis you
 * need to add to the string in order for it to be balanced.
 */

// Remove any pair of opening and closing parentheses
const removePair = (input) => input.replace(/\(([^\)]*)\)/, "$1");

// How many parentheses in this string need to be closed?
const numBalanced = (str = "") => {
  let lastLength = str.length;
  let reduced = removePair(str);

  while (reduced.length !== lastLength) {
    reduced = removePair(reduced);
    lastLength = reduced.length;
  }

  return lastLength;
};

console.log(numBalanced("()")); // 0
console.log(numBalanced("(()")); // 1
console.log(numBalanced(`))()))))()`)); // 6
console.log(numBalanced(`)))))`)); // 5

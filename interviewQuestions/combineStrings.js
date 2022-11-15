/**
 * Given a list of strings arr, and a max size n, return a new list where the
 * strings (from left to right) are joined together with a space, so that each
 * new string is less than or equal to the max size.
 */

const combineStrings = (arr = [], max = 1) => {
  let groups = [];

  arr.forEach((word) => {
    // Get the current group and a trailing whitespace
    const index = groups.length - 1;
    const group = (groups[index] ?? "") + " ";

    if (index === -1 || group.length + word.length > max) {
      // There is no group, or adding this word makes the group too long, start a new group
      groups.push(word);
    } else {
      // Add this word to the current group
      groups[index] = group + word;
    }
  });

  return groups;
};

console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 5)); // ["a b c", "d e f", "g"]
console.log(combineStrings(["a", "b", "c", "d", "e", "f", "g"], 12)); // ["a b c d e f", "g"]
console.log(combineStrings(["alpha", "beta", "gamma", "delta", "epsilon"], 20)); // ["alpha beta gamma", "delta epsilon"]

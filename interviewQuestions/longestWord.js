/**
 * Return the longest word possible from a dictionary of strings
 * where the letters are in the same order
 * @param {string} str A given string of characters
 * @param {string[]} dict A dictionary of strings to find words in
 * @returns
 */
const longestWord = (str = "", dict = []) => {
  return dict.reduce((longest, word) => {
    const pattern = new RegExp(`${word.split("").join(".*")}`, "i");
    return word.length > longest.length && pattern.test(str) ? word : longest;
  }, " ");
};

console.log(
  longestWord("abppplee", ["bale", "able", "ale", "apple", "kangaroo"]), // apple
  longestWord("abppplee", ["bale", "able", "ale", "kangaroo"]) // able
);

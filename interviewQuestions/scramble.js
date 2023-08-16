/**
 * Prompt: If you mix up the order of letters in a word, many people can slitl
 * raed and urenadnstd tehm. Write a function that takes an input sentence, and
 * mixes up the insides of words (anything longer than 3 letters).
 */

const shuffle = (arr = []) =>
  arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const scramble = (str = "") => {
  const words = str.trim().split(/[\s-]/);

  const shuffled = words
    .map((rawWord) => {
      // Remove punctuation
      const word = rawWord.replace(/[^a-z0-9]+/gi, "");

      // Early return for words that are too short to shuffle
      if (word.length <= 3) return word;

      // Extract the necessary letters
      const first = word.at(0);
      const unshuffled = word.slice(1, word.length - 1);
      const last = word.at(-1);

      // Ensure that the word is never returned in its original order
      let shuffled = unshuffled;
      while (unshuffled === shuffled) {
        shuffled = shuffle(unshuffled.split("")).join("");
      }

      // Restore the first and last letters to the shuffled word
      return `${first}${shuffled}${last}`;
    })
    .join(" ");

  // Early return if there isn't any punctuation to fix
  if (!str.match(/[^a-z0-9\s]/)) return shuffled;

  // Restore punctuation to its original position in the string
  let shuffledChars = shuffled.split("");
  let letters = [];
  let offset = 0;

  str.split("").forEach((char, pos) => {
    const isPunctuation = char.match(/[^a-z0-9\s]/i);
    const isHyphen = char.match(/-/);

    if (isPunctuation) letters.push(char);
    if (!isPunctuation && !isHyphen) letters.push(shuffledChars[pos - offset]);
    if (isPunctuation && !isHyphen) offset++;
  });

  return letters.join("");
};

console.log(scramble("A quick brown fox jumped over the lazy dog."));

console.log(scramble("small"));
console.log(scramble(`It's going to retain hyphenated-words, commas, and other punctuation!`));

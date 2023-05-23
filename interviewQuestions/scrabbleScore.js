/**
 * Prompt: Given a strin'g', calculate the score that it would get in a game of Scrabble. For extra credi't', try
 * verifying if the string is a valid wor'd', or take into account premium squares!
 */

const letterScores = [
  [],
  ["E", "A", "I", "O", "N", "R", "T", "L", "S", "U"], // 1 point
  ["D", "G"], // 2 points
  ["B", "C", "M", "P"], // 3 points
  ["F", "H", "V", "W", "Y"], // 4 poinnts
  ["K"], // 5 points
  [],
  [],
  ["J", "X"], // 8 points
  [],
  ["Q", "Z"], // 10 points
];

const scrabbleScore = (input = "") => {
  return input
    .trim()
    .split("")
    .reduce((score, letter = "") => {
      const point = letterScores.findIndex((letters = []) => letters.includes(letter));
      return (score += point);
    }, 0);
};

console.log(scrabbleScore("FIZZBUZZ")); // 49

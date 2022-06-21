const wordleGuess = (guess = "", solution = "") =>
  guess
    .split("")
    .map((letter, index) => {
      if (solution[index] === letter) return "🟩";
      if (solution.includes(letter)) return "🟨";
      return "⬛";
    })
    .join("");

const solutionWord = "fudge";
const guessWord = "lodge";

console.log(wordleGuess(guessWord, solutionWord));

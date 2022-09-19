const clamp = (number = 0, min = 0, max = 100) =>
  Math.min(Math.max(number, min), max);

const round = (number, precision = 2) =>
  Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision;

const average = (numbers = []) =>
  numbers.reduce((a, b) => a + b) / numbers.length;

const calculateGPA = (grades = []) => {
  const scores = grades
    .map(
      ([grade, modifier]) =>
        ["F", "D", "C", "B", "A"].findIndex((letter) => letter === grade) + // Returns -1 to 4
        (["-", "+"].includes(modifier) ? +`${modifier}0.3` : 0) // Uses the optional modifier to add or remove .3
    )
    .map((score) => clamp(score, 0, 4)); // Disallow F-, A+, and the findIndex -1 return

  return round(average(scores), 1);
};

console.log(calculateGPA(["A"])); // 4
console.log(calculateGPA(["F", "F", "F"])); // 0
console.log(calculateGPA(["A", "A-", "B+", "B", "B-"])); // 3.3
console.log(calculateGPA(["A", "B+", "C-", "A"])); // 3.3

console.log(calculateGPA(["A+"])); // 4 - Can't go over
console.log(calculateGPA(["F-"])); // 0 - Can't go under
console.log(calculateGPA(["Z"])); // 0 - Can't use invalid letters
console.log(calculateGPA(["B°"])); // 3 - Can't use weird modifiers

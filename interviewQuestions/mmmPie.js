/**
 * Prompt: Given an array of people objects (where each person has a name and a number of pie pieces they’re hungry for)
 * and a number for the number of pieces that the pie can be cut into, return the number of pies you need to buy.
 */
const mmmPie = (people = []) => {
  const slices = people.reduce((sum, { num = 0 }) => sum + num, 0);
  const pies = Math.ceil(slices / 8);
  return pies;
};

// 16 pieces needed, pies can be cut into 8 pieces, so 2 pies should be bought
const arr = [
  { name: "Joe", num: 9 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
];
console.log(mmmPie(arr, 8)); // 2

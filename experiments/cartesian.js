/**
 * Combine two or more input arrays into every possible combination of their inputs
 * @param  {...Array} a Arrays of values to be combined
 * @returns An array of arrays containing each possible combination
 */
const cartesian = (...a) =>
  a.reduce((a, b) => a.flatMap((c) => b.map((d) => [c, d].flat())));

const output = cartesian([1, 2, 3], ["2022-11-01", "2022-11-02"]).map(
  ([id, date]) => `${id}-${date}`
);

console.log(output);

/**
 * Putting a string into a new Date() makes a new date with no time.
 * What happens when you put a Date in a Date?
 */
const dates = ["2022-03-29", new Date("2022-03-29")];

const output = dates.map((date) => new Date(date));

console.log(output); // Nothing, it's still a date with no time

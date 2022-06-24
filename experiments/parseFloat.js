/**
 * What happens when we try to add an undefined variable to a number, then parse a float?
 */
let fees = 0;
fees += undefined;
console.log(parseFloat(fees.toFixed(6))); // NaN

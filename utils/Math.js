/**
 * Returns a random number, inclusive of the min and max
 * @param {Number=0} min
 * @param {Number=10} max
 * @returns {Number}
 */
const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Round a number to a given precision and solve for floating point decimals
 * @param {Number} number
 * @param {Number=2} precision
 * @returns {Number}
 */
const roundTo = (number = 0, precision = 2) =>
  Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision;

/**
 * Round a number to a fixed number of decimal places
 * @param {Number} number
 * @param {Number=2} precision
 * @returns {String}
 * @example
 * // returns '100.00'
 * roundToFixed(99.99)
 */
const roundToFixed = (number = 0, precision = 2) => roundTo(number, precision).toFixed(precision);

module.exports = {
  randomNumber,
  roundTo,
  roundToFixed,
};

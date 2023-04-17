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
  roundTo,
  roundToFixed,
};

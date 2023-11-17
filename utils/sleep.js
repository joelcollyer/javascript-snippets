/**
 * Used in testing to delay operations by "sleeping" for a given number of milliseconds
 * @param {Number=1000} ms How many milliseconds to wait
 * @returns {void}
 */
const sleep = async (ms = 1000) => {
  return await new Promise((resolve) => setTimeout(() => resolve(), ms));
};

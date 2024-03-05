const tests = [0, -1, 123, 123.456, "0", null, undefined, "123.4356", NaN, Number.MAX_SAFE_INTEGER];

tests.forEach((num) => console.log({ [num]: isNaN(num) }));

const filterOnNumber = tests.filter(Number);
console.log({ filterOnNumber }, "\r\n");

/**
 * A helper function is needed to filter falsey non-numerics out:
 */
const isNumeric = (num) => {
  if (num === null) return false;
  const parsed = +num;
  return parsed === 0 || !isNaN(parsed);
};
tests.forEach((num) => console.log({ [num]: isNumeric(num) }));

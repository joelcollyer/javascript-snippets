const tests = [
  0,
  -1,
  123,
  123.456,
  "0",
  null,
  undefined,
  "123.4356",
  NaN,
  Number.MAX_SAFE_INTEGER,
];

tests.forEach((num) => console.log({ [num]: isNaN(num) }));

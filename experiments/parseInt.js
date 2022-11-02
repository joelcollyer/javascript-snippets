const tests = [
  123, // +int = 123, parseInt = 123
  "123", // +int = 123, parseInt = 123
  "123.456", // +int = 123.456, parseInt = 123
  "1e10", // +int = 10000000000, parseInt = 1
  "5E", // +int = NaN, parseInt = 5
  "0", // +int = 0, parseInt = 0
  "", // +int = 0, parseInt = NaN
  false, // +int = 0, parseInt = NaN
  null, // +int = 0, parseInt = NaN
  undefined, // +int = NaN, parseInt = NaN
  "-100.10", // =int = -100.1, parseInt = -100
];

tests.forEach((int) => {
  console.log({
    int,
    number: Number(int),
    parseInt: parseInt(int, 10),
    coerce: +int,
    equality: +int == int,
    deepEquality: +int === int,
  });
});

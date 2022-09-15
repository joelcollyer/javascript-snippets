const tests = [
  123,
  "123",
  "123.456",
  "1e10",
  "5E",
  "0",
  "",
  false,
  null,
  undefined,
];

tests.forEach((int) => {
  console.log({
    int,
    parseInt: parseInt(int, 10),
    coerce: +int,
    equality: +int == int,
    deepEquality: +int === int,
  });
});

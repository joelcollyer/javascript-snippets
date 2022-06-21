const tests = ["123", "123.456", "1e10", "5E"];

tests.forEach((int) => {
  console.log({
    parseInt: parseInt(int, 10),
    coerce: +int,
    equality: +int == int,
    deepEquality: +int === int,
  });
});

const whoOwes = (receipts = []) => {
  const sums = {};
  let total = 0;
  receipts.forEach(({ name, paid }) => {
    if (!sums[name]) sums[name] = 0;
    sums[name] = +sums[name] + +paid;
    total = total + +paid;
  });

  const median = total / Object.keys(sums).length;

  const owed = {};
  const owes = {};
  Object.entries(sums).forEach(([name, paid]) => {
    const diff = median - paid;

    if (diff <= 0) {
      owed[name] = diff;
    } else {
      owes[name] = diff;
    }
  });

  const whoOwes = [];
  const paidTo = Object.keys(owed)[0];
  Object.keys(owes).forEach((name) =>
    whoOwes.push(`${name} owes ${paidTo} $${owes[name]}`)
  );

  return whoOwes.join(", ");
};

console.log(
  whoOwes([
    { name: "Ximena", paid: 45 },
    { name: "Clara", paid: 130 },
    { name: "Ximena", paid: 100 },
    { name: "Cassidy", paid: 140 },
    { name: "Cassidy", paid: 76 },
    { name: "Clara", paid: 29 },
    { name: "Ximena", paid: 20 },
  ])
);

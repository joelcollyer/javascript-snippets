const isOrdered = (ordered) =>
  !ordered.map((curr, index, arr) => curr !== arr[index + 1]).includes(false);

const shuffle = (arr = []) =>
  arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const orderFireworks = (fireworks = []) => {
  const maxTries = 30;
  let tries = 0;
  let ordered = fireworks;

  while (!isOrdered(ordered) && tries < maxTries) {
    ordered = shuffle(ordered);
    tries++;
  }

  if (!isOrdered(ordered)) {
    throw new Error(`Failed to order the fireworks after ${tries} attempts.`);
  }

  return ordered;
};

console.log(
  orderFireworks([
    "green",
    "green",
    "green",
    "red",
    "red",
    "blue",
    "blue",
  ]).join(", ")
);

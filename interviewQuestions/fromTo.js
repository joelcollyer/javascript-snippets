const fromTo = (min = 0, max = 0) => {
  return () => (min <= max ? min++ : undefined);
};

const gen = fromTo(5, 7);

console.log(gen());
console.log(gen());
console.log(gen());
console.log(gen());

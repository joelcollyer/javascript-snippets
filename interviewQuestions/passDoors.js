/**
 * Let’s say you have n doors that start out as closed.
 * With the first pass across the doors, you toggle every door open.
 * With the second pass, you toggle every second door.
 * With the third, every third door, and so on.
 * Write a function that takes in an integer numberOfPasses,
 * and returns how many doors are open after the number of passes.
 */

// Helper to output a message so that you can inspect which doors are open
const log = (pass = 0, doors = []) => {
  const booleans = doors.map((closed) => (closed ? 1 : 0));
  console.log(
    `${pass === 0 ? "Initial:" : `Pass ${pass}: `} ${booleans.join(" ")}`
  );
};

const passDoors = (n, numberOfPasses) => {
  let doors = Array.from({ length: n }, () => true);
  log(0, doors);
  for (let pass = 1; pass <= numberOfPasses; pass++) {
    doors = doors.map((closed, i) => ((i + 1) % pass === 0 ? !closed : closed));
    log(pass, doors);
  }
  return doors.filter((closed) => closed === false).length;
};

console.log(passDoors(7, 3)); // 4

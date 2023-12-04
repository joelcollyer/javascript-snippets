/**
 * Prompt: There is a sorted integer array that has been rotated an unknown
 * number of times. Given that rotated array, return how many times it has been
 * rotated. It may contain duplicate numbers!
 */

const sort = (arr = []) => [...arr].sort((a, b) => a - b);

const min = (arr = []) => sort(arr)[0];

function rotatedNum(arr = []) {
  const lowestNumber = min(arr);
  const firstIndex = arr.findIndex((num) => num === lowestNumber);

  let rotated = firstIndex;

  // If the lowest number appears later in the array return that index instead
  for (let index = firstIndex + 1; index < arr.length; index++) {
    const prev = arr[index - 1];
    const curr = arr[index];
    if (prev > curr && curr === lowestNumber) rotated = index;
  }

  return rotated;
}

console.log(rotatedNum([4, 0, 1, 2, 3])); // 1
console.log(rotatedNum([7, 9, 20])); // 0
console.log(rotatedNum([7, 7, 314, 1337, 7])); // 4

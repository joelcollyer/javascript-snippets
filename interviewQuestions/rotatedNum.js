/**
 * Prompt: There is a sorted integer array that has been rotated an unknown
 * number of times. Given that rotated array, return how many times it has been
 * rotated. It may contain duplicate numbers!
 */

const sort = (arr = []) => [...arr].sort((a, b) => a - b);

const min = (arr = []) => sort(arr).at(0);

function rotatedNum(arr = []) {
  const lowestNumber = min(arr);
  const firstIndex = arr.findIndex((num) => num === lowestNumber);

  // If the lowest number appears later in the array return that index instead
  return arr.reduce((rotated, curr, index) => {
    if (arr[index - 1] > curr && curr === lowestNumber) return index;
    return rotated;
  }, firstIndex);
}

console.log(rotatedNum([4, 0, 1, 2, 3])); // 1
console.log(rotatedNum([7, 9, 20])); // 0
console.log(rotatedNum([7, 7, 314, 1337, 7])); // 4

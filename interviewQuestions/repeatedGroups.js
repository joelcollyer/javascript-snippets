/**
 * Prompt: Given a list of numbers, return all groups of repeating consecutive numbers
 */

const repeatedGroups = (arr = []) => {
  let groupIndex = 0;
  const groups = [];

  arr.forEach((num, index) => {
    const group = groups?.[groupIndex] ?? [];
    const prevNum = arr[index - 1];
    const nextNum = arr[index + 1];

    // This feels clunky, there has to be a more elegant way to find pairs of numbers
    if (nextNum === num || prevNum === num) groups[groupIndex] = [...group, num];

    if (group.length && nextNum !== num) groupIndex = groups.length += 1;
  });

  // Filter out any empty arrays and return
  return groups.filter((group) => group.length);
};

console.log(repeatedGroups([1, 2, 2, 4, 5])); // [[2, 2]]
console.log(repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9])); // [[1, 1], [0, 0], [4, 4, 4], [9, 9]]

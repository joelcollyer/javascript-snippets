const maximizeArray = (...arrays) => {
  return [...new Set(arrays.flat())]
    .sort((a, b) => a - b)
    .slice(-arrays[0].length);
};

let arr1 = [7, 4, 10, 0, 1];
let arr2 = [9, 7, 2, 3, 6];
console.log(maximizeArray(arr1, arr2));

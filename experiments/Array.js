const arr = Array.from({ length: 10 }, () => Math.round(Math.random() * 100));

console.log({ arr, first: arr[0], last: arr[arr.length - 1] });
console.log({ arr, first: arr.at(0), last: arr.at(-1) }); // Node >v16.6.0

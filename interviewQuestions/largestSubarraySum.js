const sum = (arr = []) => arr.reduce((sum, int) => sum + int, 0);

const largestSubarraySum = (arr = [], subArrLen = 1) => {
  let largestSubArray = [];
  let largestSum = 0;

  for (let index = 0; index <= arr.length - subArrLen; index++) {
    const subArray = arr.slice(index, index + subArrLen);
    const subArraySum = sum(subArray);

    if (subArraySum > largestSum) {
      largestSubArray = subArray;
      largestSum = subArraySum;
    }
  }

  return largestSubArray;
};

console.log(largestSubarraySum([3, 1, 4, 1, 5, 9, 2, 6], 3));

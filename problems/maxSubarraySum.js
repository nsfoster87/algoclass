// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array

const maxSubarraySum = (arr, n) => {
  let max = null;
  for (let i = 0; i+n <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      count += arr[i + j];
    }
    if (max === null || count > max) max = count;
  }
  return max;
};

module.exports = maxSubarraySum;
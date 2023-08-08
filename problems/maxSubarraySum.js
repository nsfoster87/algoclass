// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array

const maxSubarraySum = (arr, n) => {
  if (n > arr.length) return null;

  let max = -Infinity;
  for (let i = 0; i+n <= arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += arr[i + j];
    }
    if (sum > max) max = sum;
  }

  return max;
};

module.exports = maxSubarraySum;
// Write a function called maxSubarraySum which accepts
// an array of integers and a number called n. The function
// should calculate the maximum sum of n consecutive elements
// in the array

const maxSubarraySum = (arr, n) => {
  if (n > arr.length) return null;

  let currentSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
  }
  let max = currentSum;

  for (let i = 1; i+n <= arr.length; i++) {
    currentSum = currentSum - arr[i-1] + arr[i+n-1];
    if (currentSum > max) max = currentSum;
  }

  return max;
};

module.exports = maxSubarraySum;
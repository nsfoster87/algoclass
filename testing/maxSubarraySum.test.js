const maxSubarraySum = require('../problems/maxSubarraySum');

describe('maxSubarraySum', () => {
  it('should calculate the maximum sum of n consecutive elements in arr', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toBe(10);
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toBe(17);
    expect(maxSubarraySum([4,2,1,6], 1)).toBe(6);
    expect(maxSubarraySum([4,2,1,6,2], 4)).toBe(13);
  });
  it('should return null for an empty array', () => {
    expect(maxSubarraySum([], 4)).toBe(null);
  });
});
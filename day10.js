// Input:
// nums = [1,1,1,2,2,3], k = 2

// Output:
// [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const entries = Object.entries(freq);
  entries.sort((a, b) => b[1] - a[1]);

  return entries.slice(0, k).map(([num]) => Number(num));
}

// Bucket sort approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function topKFrequent(nums, k) {
  let buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const [num, count] of Object.entries(freq)) {
    buckets[count].push(Number(num));
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}

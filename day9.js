// Input
// strs = ["eat","tea","tan","ate","nat","bat"]

// Output
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function groupAnagrams(strs) {
  const groups = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(str);
  }

  return Object.values(groups);
}

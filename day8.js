// const seen = {};

// if (seen[num]) {
//   // already seen
// }

// seen[num] = true;

function containsDuplicate(arr) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      return true;
    }
    seen[arr[i]] = true;
  }

  return false;
}

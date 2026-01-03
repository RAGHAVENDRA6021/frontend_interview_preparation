//     Input:
// arr = [1, 2, 3, 5, 6, 11, 15, 16, 17, 18];
// sum = 20;

// Output:
// true
// [1, 16, 3]

const threeSum = (arr, k) => {
  const map = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i);
  }
  for (let i = 0; i < n; i++) {
    for (j = i + 1; i < n; j++) {
      const rem = k - (arr[j] + arr[i]);
      if (map.has(rem) && map.get(k) !== i && map.get(k) !== j) {
        console.log([arr[i], arr[j], rem]);
        return true;
      }
    }
  }
  console.log("no elements found");
  return false;
};

threeSum([1, 2, 3, 5, 6, 11, 15, 16, 17, 18], 20);

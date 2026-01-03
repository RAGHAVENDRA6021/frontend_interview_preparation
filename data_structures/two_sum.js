// Input:
// var arr = [15, 4, 9 ,3 ,2, 12, 11, 14, 21, 24, 1, 10];
// k = 25;

// Output:
// true  (If found)
// or
// false (If Not found)

const findSum = (arr, k) => {
  const map = new Map();
  for (let ele of arr) {
    if (map.has(k - ele)) return true;
    else map.set(ele, true);
  }
  return false;
};

console.log(findSum([15, 4, 9, 3, 2, 12, 11, 14, 21, 24, 1, 10], 5));

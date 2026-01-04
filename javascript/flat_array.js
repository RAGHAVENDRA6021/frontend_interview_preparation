// Input:
// [[[1, [1.1]], 2, 3], [4, 5]]

// Output:
// [1, 1.1, 2, 3, 4, 5]

const flatten_array = (arr) => {
  const result = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      const newArray = flatten_array(ele);
      // console.log("ele", ele, "newArray", newArray);
      result.push(...newArray);
    } else {
      result.push(ele);
    }
  }

  return result;
};

console.log(
  flatten_array([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);

console.log(flatten_array([1, 2, [3, 4], [[5]]]));

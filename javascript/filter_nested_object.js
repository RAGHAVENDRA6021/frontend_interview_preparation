const filterNestedObject = function (obj, fn) {
  let updatedObj = {};
  for (let ele in obj) {
    const value = obj[ele];
    if (fn(value)) {
      updatedObj[ele] = obj[ele];
    }

    if (typeof value === "object") {
      const filteredObj = filterNestedObject(value, fn);
      if (Object.keys(filteredObj).length) updatedObj[ele] = filteredObj;
    }
  }

  return updatedObj;
};

const obj = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

console.log(filterNestedObject(obj, filter));

// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night Moon",
//   }
// };

const promiseRace = (iterable) => {
  return new Promise((res, rej) => {
    iterable.forEach((elementProm) => {
      elementProm.then((val) => res(val)).catch((err) => rej(err));
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 40, "three");
});
promiseRace([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise3 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

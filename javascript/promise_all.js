/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  const result = Array(iterable.length);
  let resolvedPromises = 0;
  return new Promise((res, rej) => {
    iterable.forEach((eachProm, index) => {
      eachProm
        .then((val) => {
          result[index] = val;
          resolvedPromises++;
          if (resolvedPromises === iterable.length) res(result);
        })
        .catch((err) => rej(err));
    });
  });
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
promiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

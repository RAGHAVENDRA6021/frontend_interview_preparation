// const asyncTask = function(i) {
//  return function(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Completing ${i}`), 100*i)
//   });
//  }
// }

// const promises = [
//   asyncTask(3),
//   asyncTask(1),
//   asyncTask(7),
//   asyncTask(2),
//   asyncTask(5),
// ];

// asyncSeriesExecuter(promises);

// Output:
// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"

const seriesExecution = async (iterable) => {
  for (let element of iterable) {
    try {
      const response = await element();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};

const asyncTask = function (i) {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
    });
  };
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

seriesExecution(promises);

// function message(){
//   console.log("hello");
// }

// const sample = sampler(message, 4);
// sample();
// sample();
// sample();
// sample(); // this will be executed
// sample();
// sample();
// sample();
// sample(); // this will be executed

function sampler(fn, count) {
  let counter = 0;
  return function (...args) {
    console.log("Entered closure");
    counter += 1;
    if (counter === count) {
      fn(...args);
      counter = 0;
    }
  };
}

function message(...args) {
  console.log("hello", args);
}

const sample = sampler(message, 4);
sample(1, 2);
sample(2, 44);
sample(3, 456, 5);
sample(1, 2, 3, 34); // this will be executed
sample(1, 2, 3, 34);
sample(1, 3, 34);
sample(3, 34);
sample(1, 2, 3); // this will be executed

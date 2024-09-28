const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(new Error("Error occured"));
    // resolve("Value 1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});

// For printing all promises resolved value
// const promise_all = Promise.all([p1, p2, p3]);

// It gives the proper result if the promises  will be rejected
// const promise_all = Promise.allSettled([p1, p2, p3]);

// Give the value of the promise which is take less time to execute
// if this promise is rejected then it give error
// const promise_all = Promise.race([p1, p2, p3]);

// less time executed promise and status should be resolved of this promise
// const promise_all = Promise.any([p1, p2, p3]);

// Give the resolve value
// const promise_all = Promise.resolve(6);

//Give the rejected values
const promise_all = Promise.reject(new Error("Error aa gayi"));
promise_all
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("errr");
  });

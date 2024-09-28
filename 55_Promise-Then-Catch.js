// Promise.then() and Promise.catch()
// A Promise is a promise of code execution which defines your promise will resolve or rejected... We use promises to acheive asynchronus programming in javascript ok

//The finally block is always executed, whether an exception is handled or not.

// if the promise is resolved then  Then block will be executed
// If the proise is rejected then  Catch block will be executed..

const pro = new Promise((resolve, reject) => {
  console.log("Promise is pending");

  reject(new Error("Error Vaibhav"));
});

pro
  .then((result) => {
    console.log(result);
  })
  //   .catch((error) => {
  //     console.log("error occurred: ");
  //   })
  .finally(() => {
    console.log("always executed");
  });

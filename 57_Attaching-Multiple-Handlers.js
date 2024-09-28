let pakkaPromise = new Promise((resolve, reject) => {
  temp = 11;

  if (temp == "101") {
    resolve(4);
  } else {
    reject(new Error("Error occured"));
  }
});

// Attaching multiple handlers on promise Handler--1
pakkaPromise
  .then((resolve) => {
    console.log("First time resolved " + resolve);
  })
  .catch((err) => {
    console.error("graceful termination");
  });

// Handler --2
// This handler generate error because we did not add catch block here..
// pakkaPromise.then((resolve) => {
//     console.log("Second time resolved " + resolve);
// });

// Promise Chaining...
pakkaPromise
  .then((value) => {
    return 4;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    consol.log("terminated...");
  });

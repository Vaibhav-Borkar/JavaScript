const pro = new Promise((resolve, reject) => {
  // resolve("Success");
  console.log("Done");
  throw new Error("New Error Found");
});

// The resolve value come in the result parameter when promise solved..
pro
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error");
  });

const promise1 = new Promise((resolve, reject) => {
  let bool = false;
  //   let bool = true;
  setTimeout(() => {
    if (bool) {
      resolve({ username: "Vaibhav", password: 123 });
    } else {
      reject(new Error("New err"));
    }
  }, 1000);
});

promise1
  .then((name) => {
    // console.log(name.username);
    //   or
    return name.username;
  })
  .then((names) => {
    console.log(names);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("Finally always executed..");
  });

// Promise handling using async and await...

const promise2 = new Promise((resolve, reject) => {
  let bool = true;
  if (bool) {
    resolve({ employee: "Vaibhav Borkar", age: 22 });
  } else {
    reject(new Error("Err Occured.."));
  }
});

async function handlePromise2() {
  let responce = await promise2;
  console.log(responce.employee);
  console.log(responce.age);
}
handlePromise2();

let promise = new Promise(function (resolve, reject) {
  console.log("promise");
  //   resolve(7);
  //   reject(34);
});
console.log("hellowww");
setTimeout(() => {
  console.log("hellow two ins 2 seconds");
}, 2000);
console.log("My name is three");
console.log(promise);

// Callback Helll...
// console.log("Task 1"); // first
// setTimeout(() => {
//   console.log("Task 2"); // second
//   setTimeout(() => {
//     console.log("Task 3"); // third
//   }, 1000);
// }, 1000);

// function printTask(message, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, delay);
//   });
// }

// // Using Promises to avoid callback hell
// printTask("Task 1", 0)
//   .then(() => printTask("Task 2", 1000))
//   .then(() => printTask("Task 3", 1000))
//   .then(() => printTask("Task 4", 1000));

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Script loaded" + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error Loading" + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Hello world" + src);
}

function goodmorning(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Good morning" + src);
}
loadScript("https://code.jquery.com/jquery-3.4.1.slim.min.js", goodmorning);

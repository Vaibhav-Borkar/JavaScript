// CALLBACK FUNCTION

// function hello(name) {
//   console.log(name);
// }

// function rajaji(callback) {
//   const name = prompt("enter name");
//   callback(name);
// }
//rajaji(hello);

//CALLBACK FUNCTION

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name:");
//   callback(name);
// }
// processUserInput(greet);

// CALLBACK FUNCTION USING SETTIMEOUT FUNCTION....

// function sayHello() {
//   console.log("hello vaibhav");
// }
// setTimeout(sayHello, 200);

//  REMOVING NEGATIVE NUMBERS IN ARRAY USING CALLBACK

// const arr = [1, 3, 5, 7, 8, 6, -423, -78, 343, -6, 6];
// console.log(arr);

// const result = removeNeg(arr, removes);
// console.log(result);
// function removes(i) {
//   if (i > 0) {
//     return i;
//   }
// }

// const result = removeNeg(arr, (i) => i > 0);
// console.log(result);
// function removeNeg(arrays, callback) {
//   const myarr = [];
//   for (let i of arrays) {
//     if (callback(i)) {
//       myarr.push(i);
//     }
//   }
//   return myarr;
// }

// function handleClick(callback) {
//   // Simulating a button click event
//   setTimeout(() => {
//     callback("Button clicked!");
//   }, 1000); // Simulating a 1-second delay
// }

// function logMessage(message) {
//   console.log(message + " 1");
// }

// function logMess(message) {
//   console.log(message + "2");
//   console.log(message);
// }

// Handling the click event and logging the message
// handleClick(logMessage);

// ANOTHER EXAMPLE OF CALLBACK...

let arr = [1, 2, 3, 4, 100, 500, 6000, 600];
function add(arr, callback) {
  let sum = 0;
  for (i of arr) {
    sum += i;
  }
  console.log(sum);
}
add(arr); // in this case we did not pass second argument thats why second argumet is undefined...ok

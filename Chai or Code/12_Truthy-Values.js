// False Values
// false ,0 ,-0, BigInt 0n , "", null ,undefined ,Nan

// Truthy Values
// true, 1, -1, BigInt 1n, "hello", [], {}, function(){}, new Date() ,"0" ,"false"

// how to check array is empty or not

let arr = [];
if (arr.length === 0) {
  console.log("array is empty");
} else {
  console.log("Not empty");
}

// Checking object is empty or not....

let obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
} else {
}

// Nullish coalescing operator :- Used for handling null and undefined values..

let a = null ?? "default value";
console.log(a); // Output: "default value"

let b = undefined ?? 34;
console.log(b);

let c = null ?? "main" ?? 40; // in this case first value will be executed..
console.log(c);

// Bitwise Operator
let x = 5;
x > 4 ? console.log("x is greater than 4") : console.log("x is less then 4");

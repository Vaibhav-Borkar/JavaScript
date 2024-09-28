// In this Program we learn about the destructuring of objects
// tExample 1

let destructuedObj = {
  name: "Vaibhav",
  age: 22,
  gender: "Male",
  company: "AIR Visioninfinity",
};

// if you want to access the name then..
console.log(destructuedObj.name);
// for avoiding this things .. object destucturing is required
let { age } = destructuedObj;
console.log(age);

let { gender } = destructuedObj;
console.log(gender);

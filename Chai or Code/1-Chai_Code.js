// // === operator for content and address both comparision
// // == only content comparision

// let str = new String("code with vaibhav");

// if (str === "code with vaibhav") {
//   console.log("Content is same");
// } else {
//   console.log("Content is not same");
// }

// if (2 == 2) {
//   console.log("same");
// } else {
//   console.log("not same");
// }

// let str1 = "java";
// let str2 = "java";

// if (str1 === str2) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// let check1 = new String(str1);
// let check2 = new String(str2);

// // Because both objects are different
// // So, it will return false
// if (check1 == check2) {
//   console.log("sahi hai");
// } else {
//   console.log("galat hai");
// }

// let operation = "java is a good programming language";
// let answ = operation.replace(/\s+/g, "");
// let ans = answ.split("");
// console.log(ans);
// console.log(ans[5]);

// let myarray = [1, 2, 3, 5, 6, 3, 89, 0, 9, 10];
// console.log(myarray.includes(9));
// console.log(myarray.indexOf(9));
// console.log(myarray.pop(9));

// let joinarr = myarray.join("");
// console.log(joinarr);

// console.log(myarray.toString());

// console.log(
//   "--------------------------------------------------------------------"
// );

// // Slice vs Splice

// let originalArr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let sliceArr = originalArr.slice(1, 3);
// console.log("sliceArr", sliceArr);
// console.log("originalArr", originalArr);

// let spliceArr = originalArr.splice(0, 3);
// console.log("spliceArr", spliceArr);
// console.log("originalArr", originalArr);

// Objects in javasript..

// let mysym = Symbol("Changed");

// let obj = {
//   name: "vaibhav",
//   "full name": "Vaibhav Borkar",
//   age: 21,
//   city: "New York",
//   hobbies: ["reading", "traveling", "swimming"],
//   isMarried: false,
//   education: "MCA",
//   gender: "male",
//   custom: {
//     name: "Raja",
//     age: 5,
//     education: "nursery",
//   },
//   [mysym]: "changeMeBro",
// };

// console.log(typeof mysym);
// console.log(typeof obj[mysym]);
// console.log(obj.name);
// console.log(obj.custom);
// console.log(obj["full name"]);
// obj["full name"] = "Master Vaibhav Borkar";
// console.log(obj["full name"]);
// Object.freeze(obj); // Because of this line this objects doesnt change....
// obj["full name"] = "Aakash kapgate";
// console.log(obj["full name"]);

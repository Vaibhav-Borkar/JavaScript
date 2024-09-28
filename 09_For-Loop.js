// adding first four natural numbers
// For loop
let num = 4;
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum = sum + i;
}
console.log(" sum of first", num, "numbers is", sum);

//<--------------------------------------------------------------------------------------------->
// For in loop

let obj = {
  vaibhav: 2002,
  vastav: 2000,
  Aakash: 2002,
  Aarav: 2000,
  Baashya: "Don",
};

for (let a in obj) {
  console.log(a, ":", obj[a]);
}

//<--------------------------------------------------------------------------------------------->

// for of loop  -- for string iteration

let myName = "vaibhv Borkar";
for (let ab of myName) {
  console.log(ab);
}

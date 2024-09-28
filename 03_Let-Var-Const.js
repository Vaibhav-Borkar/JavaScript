// var let const

var a = 1232;
var b = "java";
var a = 243;
var a = undefined;
var a = true;
var a = false;

console.log(a, b);

// let has block scope we cant change its value outside block but we can reasign values

let num = 3312;

// let num = 232; not a valid statement

{
  let num = 23;
  console.log("Num inside block", num);
}

console.log("Num outside block", num);

// const --> for creating constant

const name = "vaibhav 28.07.2024";
//name = "monu" --> not applicabel reassignment
console.log(name);

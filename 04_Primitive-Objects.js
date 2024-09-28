// Primitive Vs Objects

let num = 123;
let str = "Hello";
let boolean = true;
let bigint = BigInt("1234");
let undefine = undefined;
let sym = Symbol("hii i am a symbol");
let nul = null;

console.log(
  typeof num,
  typeof str,
  typeof boolean,
  typeof bigint,
  typeof undefine,
  typeof sym,
  typeof nul
);

// Objects

let entry = {
  vaibhav: 1,
  vansh: 2,
  web: 3,
  nashir: 4,
};
console.log(entry["vaibhav"]);

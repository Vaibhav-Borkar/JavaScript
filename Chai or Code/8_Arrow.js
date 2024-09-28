// USES OF THIS KEYWORD IN JS

let obj = {
  name: "Vaibhav",
  age: 21,
  company: "AIR Visioninfinity",
  wellcome: function () {
    console.log(`Wellcome Mr.${this.name}`);
  },
};
obj.wellcome();

// Using this

function usingThis(name) {
  value = name;
  console.log(value);
}
usingThis("Vaibhav");

console.log(this); // Give empty object

function thisInsideFunction() {
  console.log(this);
}
thisInsideFunction();

// Arrow function

let objdemo = {
  myname: "vaibhav",
};

let arrowFunction1 = () => {
  console.log("arrow function");
};
console.log(arrowFunction1());

let arrowFunction2 = () => {
  return "Hiii";
};
console.log(arrowFunction2());

let arrowFunction3 = () => "arrow function";
console.log(arrowFunction3());

// let arrowFunction4 = () => ({ myname: "Vaibhav" });
let arrowFunction4 = () => ({ objdemo });
console.log(arrowFunction4());

let arrowFunction5 = (num1, num2) => num1 + num2;
console.log(arrowFunction5(12, 5));

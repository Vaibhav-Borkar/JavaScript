// In this program we learn about the behaviour of fuction and how functions works internally in java script..

//This function print the values which you entered in this function
function printName(entername) {
  console.log(entername);
}

printName("Vaibhav");

// Function with return type

function returnName(enternamehere) {
  return enternamehere;
}

let functionValue = returnName("Vaibhav ");
console.log(functionValue);

function addTwoNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    throw new Error("Both arguments must be numbers");
  }
}

let value = addTwoNumbers(12, 5);
console.log(value);

let num = 12;
console.log(typeof num);

function printMyName(name = "Default Value") {
  console.log(`Good Morning ${name} Please sit down`);
}
printMyName("Vaibhav");
printMyName();

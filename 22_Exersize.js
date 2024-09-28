// Random number generator

const min = 1; // minimum value (inclusive)
const max = 10; // maximum value (inclusive)
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);

while (true) {
  let input = prompt("enter the value between 1 to 10");
  if (input < randomInt) {
    console.log("input is to less ");
  } else if (input > randomInt) {
    console.log("input is to high");
  } else {
    console.log("you guess the write number");
    break;
  }
}

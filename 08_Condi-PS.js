let age = 21;

if (age > 166 && age > 20) {
  console.log("You are an adult");
} else if (age == 21) {
  console.log("your age is 21");
} else {
  console.log("not elligible");
}

// switch case

let ages = 20;
switch (ages) {
  case "21":
    console.log("you are an adult");
    break;
  case "18":
    console.log("you are a teenager");
    break;
  case "20":
    console.log("you are a young adult");
    break;
  default:
    console.log("you are not an adult");
}

let num = 12;
num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log("the number is divisible by both 2 and 3");
} else {
  console.log("the number is not divisible by both 2 and 3");
}

let yourAge = 22;
if (age >= 18) {
  console.log("you can drive");
} else {
  console.log("you can't drive");
}

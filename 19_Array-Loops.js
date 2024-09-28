let arr = [1, 2, 3, 4, 5];

// by using traditional for loop
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// By using ForEach method
let obj = arr.forEach((element) => {
  // console.log(element * element);
});

//Array.from
let names = "Vaibhav Borkar";
let nameArr = Array.from(names);

// For...of

for (let item of nameArr) {
  console.log(item);
}

// For in loop

for (let item in nameArr) {
  console.log(nameArr[item]);
}

console.log("-----------------------------------------------------");
let minutes = 1000;
let hours = minutes / 60;
console.log(hours);

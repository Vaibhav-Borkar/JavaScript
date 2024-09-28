// filter use

let arr = [100, 4434, 655, 67, 8787, 8, 66666, 50, 70];

let filtered = arr.filter((element) => {
  return element % 10 == 0;
});
console.log(filtered);

// Return square[] of elements

let arr2 = [1, 2, 3, 4, 5];
let mapped = arr2.map((element) => {
  return element * element;
});
console.log(mapped);

// factorial using reduce
let arr3 = [1, 2, 3, 4, 5];
let fact = arr3.reduce((element1, element2) => {
  return element1 * element2;
});
console.log(fact);

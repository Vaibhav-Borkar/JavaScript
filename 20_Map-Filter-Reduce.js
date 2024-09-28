let arr = [1, 2, 4, 5, 6, 7, 8, 9];

// Map method -- it return array

let maps = arr.map((value, index, array) => {
  //console.log(value, index, array);
  return value * index;
});
console.log(maps);

// Filter --filter the values based on some conditions  --- It returns array

let coll = [23, 545, 66, 7, 7, 88, 7787, 7888, 8787, 77, 65, 55, 121];
let filtered = coll.filter((element) => {
  return element > 500;
});
console.log(filtered); // it's not modify the main array it make a separate array with given condtion
console.log(coll);

// Reduce ----- It returns a value not an array

let arr3 = [1, 2, 3, 4, 5];
let sum = arr3.reduce((element1, element2) => {
  return element1 * element2;
});
console.log(sum); // it's not modify the main array it make a separate array with given con
console.log(arr3);

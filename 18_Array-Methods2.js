// DELETE ELEMENT
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num1.length); //9
delete num1[0]; // After deleting the element array length not changes
console.log(num1.length, num1); // 9

//Concating two arrays..
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let output = num1.concat(num2); // it creates the new arrays for merging elements
console.log(output);

// Sort method
let arr = [23, 13, 45, 65656, 888888888888, 45, 322222222, 111, 85, 222];
arr.sort();
console.log(arr); // Sorts in alphabetical order

// Sorting using comparator

function compare(a, b) {
  return a - b;
}
arr.sort(compare);
console.log(arr);

// Splice and Slice
// splice add elements in array 1 is start index and 3 is element count which we want to delete and 101 ,102... is elements which we inserted in array
// It returns the number of  element which is deleted.....

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(1, 3, 101, 102, 103, 104);
console.log(array);

// Slice is used to get the part of the array

let partOfArray = array.slice(2); //2nd index to end index it return a new array
let partOfArr = array.slice(2, 6); //2nd index to 3rd index it return a new array
console.log(partOfArr);

console.log(partOfArray);

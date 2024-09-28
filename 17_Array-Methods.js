let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr.toString;
console.log(arr, typeof arr); // for converting array to string

let joined = arr.join("-");
console.log(joined, typeof joined); // for converting array to string with separator

let popOperation = arr.pop(); // remove last element and return it
console.log(popOperation);

let pushOperation = arr.push(10); // insert last element in array and return the new length of array
console.log(arr);

let shifts = arr.shift(); // remove first element and return it
console.log(shifts);

let unShifts = arr.unshift(101); // add element at the beggining and returns new length of array
console.log(unShifts, arr);

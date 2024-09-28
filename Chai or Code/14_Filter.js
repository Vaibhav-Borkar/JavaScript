const numbers = [1, 2, 3, 4, 5];

//  ForEach method does not return anything
numbers.forEach((item) => {
  // console.log(item);
});

// Filter method returns a new array with the elements that pass the test implemented by the provided function
const filteredNumbers = numbers.filter((item) => {
  return item % 2 === 0;
});

// console.log(filteredNumbers); // [2, 4]

const books = [
  {
    title: "book 1",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 2000,
    edition: 2024,
  },
  {
    title: "book 2",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 2000,
    edition: 2010,
  },
  {
    title: "book 3",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 2000,
    edition: 2024,
  },
  {
    title: "book 4",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 2000,
    edition: 2007,
  },
  {
    title: "book 5",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 1999,
    edition: 2005,
  },
  {
    title: "book 6",
    author: "F. Scott Fitzgerald",
    genre: "Non-Fiction",
    publish: 1999,
    edition: 2016,
  },
];

books.forEach((item) => {
  // console.log(item);
});

const filterBoolks = books.filter((item) => {
  return item.publish === 1999;
});
// console.log(filterBoolks);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mapArr = arr.map((item) => {
  return item * 10;
});
// console.log(mapArr);

const mapArr2 = arr
  .map((item) => {
    return item * 2;
  })
  .map((item) => {
    return item + 1;
  })
  .map((item) => {
    return item + 1;
  })
  .filter((item) => {
    return item <= 16;
  });
// console.log(mapArr2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const redureResult = arr2.reduce((accumulator, curentValue) => {
  return accumulator + curentValue; // or
  // return accumulator += curentValue; is same...
}, 0);
// 0 is initial value for accumulator
console.log(redureResult);

const shopingCart = [
  {
    itemName: "Phone",
    price: 9999,
  },
  {
    itemName: "Battery",
    price: 888,
  },
  {
    itemName: "TV",
    price: 10000,
  },
  {
    itemName: "Mac Book",
    price: 150000,
  },
  {
    itemName: "Ps V",
    price: 100000,
  },
];

const calculateSum = shopingCart.reduce((accumulator, curentValue) => {
  return accumulator + curentValue.price;
}, 0);
console.log(calculateSum);

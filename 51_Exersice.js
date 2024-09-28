const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
console.log(
  date.getDate() +
    " " +
    date.getDay() +
    " " +
    date.getFullYear() +
    " " +
    date.getSeconds() +
    " " +
    date.getTime()
);

console.log(date.getDate());

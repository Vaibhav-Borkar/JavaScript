// For printing console methods
console.log(console);

// for printing warning
console.warn("Warning");

// for printing error
console.error("Error Occured");

// for assertion
console.assert(100 < 10); // failed
console.assert(100 < 1000); // passed (Underfined)

// For calculating time
console.time("forlooptime");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.timeEnd("forlooptime");

// for printing objs in tabular form
let obj = {
  monu: 1,
  sonu: 2,
  ramu: 3,
  shyamu: 4,
};

console.table(obj);

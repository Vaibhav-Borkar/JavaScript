const array = [1, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //console.log(element);
}

// break and continue
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  if (i == 10) {
    break;
  }
  //  console.log(i);
}

// Do while loop

let i = 0;
while (i < 10) {
  // console.log(i);
  i++;
}

array.forEach((element) => {
  // console.log(element);
});

for (const element of array) {
  // console.log(element);
}

const map = new Map();
map.set("name", "John");
map.set("age", 30);

map.forEach((values) => {
  // console.log(values);
});

const myMap = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  // console.log(`Key: ${key}, Value: ${value}`);
}

let ij = 0;
do {
  // console.log("DO");

  // console.log(ij);
  ij++;
} while (ij < 10);

const obj = {
  person1: {
    name: "Vaibhav",
    age: 26,
    group: "B+",
    salary: 6000,
  },
  person2: {
    name: "Vaibhav",
    age: 26,
    group: "B+",
    salary: 6000,
  },
  person3: {
    name: "Vaibhav",
    age: 26,
    group: "B+",
    salary: 6000,
  },
  person4: {
    name: "Vaibhav",
    age: 26,
    group: "B+",
    salary: 6000,
  },
};

for (const key in obj) {
  console.log(Object.values(obj));
}

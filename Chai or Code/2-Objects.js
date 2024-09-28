// Coping the one object into another object
let obj1 = {
  1: "Vaibhav",
  2: "Borkar",
  3: "Balaghat",
};
let obj2 = {
  4: "Kartik",
  5: "Sonwane",
  6: "Balaghat",
};
let obj3 = {
  7: "Aakash",
  8: "Kapgate",
  9: "Balaghat",
};

//Note :--> For merging key should be different of all objects !important
const allObj = Object.assign({}, obj1, obj2, obj3);
console.log(allObj);
let resultObj = { ...obj1, ...obj2, ...obj3 };
console.log(resultObj);

let uniqueObj = {
  name: "Ajay",
  age: 23,
  name: "vaibhav", // Key should be unique
};

console.log(uniqueObj);

// Extracting keys and values and entries in the objects..
console.log(Object.keys(resultObj));
console.log(Object.values(resultObj));
console.log(Object.entries(resultObj));
console.log(resultObj.hasOwnProperty("1")); // it check  only  keys not values..

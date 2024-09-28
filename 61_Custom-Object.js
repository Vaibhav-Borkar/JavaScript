//Custom error objects
function add(num1, num2) {
  let sum = num1 + num2;
  if (sum < 100) {
    throw new Error("less than 100");
  } else {
    return sum;
  }
}

let ans = add(12, 3340);
console.log(ans);

const adds = () => {
  try {
    throw new Error("Error");
  } catch (err) {
    // console.log(error.message);
    // console.log(err.reason);
    // console.log(err.stack);
    // console.log(err.linenumber);
    console.log(err);
  }
};
adds();
console.log("Terminate......");

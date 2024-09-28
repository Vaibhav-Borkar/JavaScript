// Function inside function in js

function outer() {
  console.log("This is outer function");

  function inner() {
    const website = "googel.com";
    console.log("This is inner function");
  }
  // console.log(website); // This will give an error because website variable present inside inner()
  inner();
}

outer();

// we cant call this function before the declaration

// myFunction();// give error

let myFunction = () => {
  console.log("My Function");
};
myFunction(); // Run successfully..

console.log("Conditional Operators");

//parseInt(prompt("Enter your age"));
// prompt not supported by node js environment..
let age =30

if (age < 10) {
  alert("You are a child");
} else if (age > 20) {
  alert("You are young");
} else {
  alert("You are somewhere in between!");
}

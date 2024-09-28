// Imedeatly Invoked Function Expression (IIFE)
// Less used in modern js

(function chai() {
  console.log("Named IIFE");
})();

// Unnamed IIFE

(() => {
  console.log("Unnamed IIFE");
})();

// Parameterised IIFE
(function (name) {
  console.log(name);
})("Vaibhav");

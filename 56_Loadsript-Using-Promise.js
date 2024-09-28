// let promi = new Promise((resolve,reject) => {
//     console.log("Promise is created");

//     setTimeout(() => {
//       resolve("resolved")
//     }, 1000);
// })

// promi.then((value) => {

// })

const loadsript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = setTimeout(() => {
      resolve(1);
    }, 1000);
    script.onerror = () => {
      console.log(0);
    };
  });
};
let p1 = loadsript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);

p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});

// write a function for adding two number

const addNumbers = (a, b) => a + b;
const sortArray = (arr) => arr.sort((a, b) => a - b);
const printNames = (names) => names.forEach((name) => console.log(name));

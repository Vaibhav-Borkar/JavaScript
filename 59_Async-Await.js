// Asyc keyword is used to declare the asynchronus functions

async function async1() {
  let delW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Degree");
    }, 1000);
  });

  let bangW = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("45 Degree");
    }, 5000);
  });

  let delhi = await delW;
  let banglore = await bangW;
  console.log("Delhi Weither is  " + delhi);
  console.log("Banglore  Weither is  " + delhi);
}

let demen = async () => {
  console.error("i am error");
};
console.log("Done");
async1();
demen();

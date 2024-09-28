const loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      // console.log("Script loaded");
      resolve(src);
    };
    document.head.append(script);
  });
};

const loadinfo = async () => {
  let i = await loadscript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  );
  console.log(i);
};
loadinfo();

const p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first");
    }, 1000);
  });
};
const p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second");
    }, 5000);
  });
};
const p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third");
    }, 1000);
  });
};

let func = async () => {
  console.time("start");
  console.log("hiii");

  let i = p1();
  let j = p2();
  let k = p3();
  let ans = Promise.all([i, j, k]);
  console.log(ans);

  console.timeEnd("start");
};
func();

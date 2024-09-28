let obj = {
  ram: 101,
  cpu: 102,
  gpu: 103,
  "ram-2": 104,
  "cpu-2": 105,
  "gpu-2": 106,
};

for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(Object.keys(obj)[i]);
  console.log(obj[Object.keys(obj)[i]]);
}

for (const key in obj) {
  console.log(key, "------------", obj[key]);
}

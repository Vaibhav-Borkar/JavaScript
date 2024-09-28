// We pass Objects as a parameter in a function for various operation...

let obj = {
  name: "Vaibhav",
  age: 12,
  company: "AIR Visioninfinity",
};

// In this method we pass a object as a parameter... ok

function funObj(objAsParameter) {
  if (isObject(objAsParameter)) {
    console.log(
      `name is ${objAsParameter.name} Age is ${objAsParameter.age} Company is ${objAsParameter.company}`
    );
    return;
  }
}

function isObject(passObject) {
  if (passObject instanceof Object) {
    return true;
  }
  return false;
}

funObj(obj);

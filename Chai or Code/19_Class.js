class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("Hello");
  }
}
let obj = new MyClass("Vaibhav", 22);
console.log(obj);
obj.sayHello();

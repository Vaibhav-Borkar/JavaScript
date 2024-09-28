variable = "java";
console.log(variable);

let lets = "letDeclared"; // Best for block level..
var vars = "varDeclared"; // Global scope
const consts = "constDeclared"; // Constant cant changed

if (true) {
  console.log(variable);
  variable = "mava";
  //consts = "constChanged"; // cant changed
  lets = "letChanged"; // changed
  var me = "vars"; // global scope
}

console.log(variable);
console.log(me); // global scope of this variable

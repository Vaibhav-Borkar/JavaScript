const { JSDOM } = require("jsdom");

const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="container" id="main">
      main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main main 
    </div>
    <h1> This is H1</h1>
    <h2> This is H2</h2>
    <h3> This is H3</h3>
    <h4> This is H4</h4>
    <h5> This is H5</h5>
    <hr />
    <div class="container" id="second">
      second second second second second second second second second second second second second second second second second second second second second second second second 
    </div>

    <ul class="mainul">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
    <li>Fourth</li>
    <li>Fifth</li>
    </ul>
  </body>
</html>

`);

const document = dom.window.document;
// console.log(document.getElementById("main").textContent);
console.log(document.getElementById("second").className);
console.log(document.getElementById("second").id);
document.getElementById("second").setAttribute("class", "container");
console.log(document.getElementById("second").className);
const elements = document.getElementsByClassName("container");

if (elements.length > 0) {
  console.log(elements[0].textContent);
  console.log(elements[1].textContent);
} else {
  console.log("No elements with the class 'container' found.");
}

const specificLi = document.querySelector(".mainul li:nth-child(2)");
console.log(specificLi.textContent);
const element = document.getElementsByClassName("container");

// DOM Selectors Methods
// getElementById
// getElementsByClassName
// getElementsByTagName
// getElementsByName
// querySelector
// querySelectorAll
// closest
// matches
// parentNode
// childNodes
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

const btnEvent1 = () => {
  document.body.style.backgroundColor = "red";
};

document.getElementById("btn1").addEventListener("click", btnEvent1);

const btnEvent2 = (e) => {
  document.body.style.backgroundColor = "yellow";
  // e is a event object inside this all information present about the event...
  console.log(e);
  console.log(e.target);
};

document.getElementById("btn2").addEventListener("click", btnEvent2);

const remove = prompt("Enter the number");
if (remove == "2") {
  document.getElementById("btn2").removeEventListener("click", btnEvent2);
} else {
  document.getElementById("btn1").removeEventListener("click", btnEvent1);
}

let runAgain = true;
while (runAgain) {
  let userColor = prompt("Enter the color");
  document.body.style.backgroundColor = userColor;
  runAgain = confirm("Do you want to play again?");
}

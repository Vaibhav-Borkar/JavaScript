// its run on the browser

let message = prompt("Enter the message...");
let confrm = confirm("Do you want to print this message on webpage");
if (confrm) {
  for (let i = 0; i < 10; i++) {
    //document.write(message);
  }
  alert("message writen successfully");
} else {
  alert("message not writen");
}

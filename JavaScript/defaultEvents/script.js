let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");
let sub = document.querySelector(".sub-btn");

// When preventing default events we need to first grab the event.
// To do this we include "e" inside the functions parameter, so we can use it inside the function.
function changeBtnText(e) {
  // Here we simply run a preventDefault() function to stop any default events from running.
  e.preventDefault();
  btn.innerHTML = "YAY!";
}

function stopFormSubmit(e) {
  e.preventDefault();
}

btn.onclick = changeBtnText;
form.onclick = stopFormSubmit;
sub.onclick = changeBtnText;

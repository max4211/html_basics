let btn = document.querySelector(".test-btn");

function firstFunction(e, name) {
  e.preventDefault();
  btn.innerHTML = name;
}

btn.addEventListener("click", function(e) {
  firstFunction(e, "Daniel");
});
btn.addEventListener("click", function() {
  btn.style.backgroundColor = "yellow";
});

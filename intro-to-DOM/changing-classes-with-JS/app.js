// Remember to place all your HTML references at the top of your JS files
const paragraphEl = document.querySelector("p");
const bodyEl = document.querySelector("body");
const switchEl = document.querySelector("button");

// To add or remove classes use the classList attribute
paragraphEl.classList.add("red-giant");
// paragraphEl.classList.remove("red-giant");

// To toggle classes
bodyEl.classList.toggle("off");

// One way to handle click events
switchEl.onclick = function () {
  switchEl.classList.toggle("on");
}
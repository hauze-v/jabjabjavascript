// DOM references
const loadingBarItemEl = document.querySelector(".loading-bar__item")

let width = 0;
let loadingBar = setInterval(function() { // Set interval is a built-in method in JS given to us by the browser
  if (loadingBarItemEl.style.width == "100%") {
    clearInterval(loadingBar) // Takes in the ID or variable name of the setInterval method to break the loop
  } else {
    width += 1;
    loadingBarItemEl.style.width = `${width}%`;
  }
}, 8)
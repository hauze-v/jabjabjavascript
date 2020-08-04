// DOM references
const loadingBarItemEl = document.querySelector(".loading-bar__item")
const loadingBarButtonEls = document.querySelectorAll(".loading-bar__button")

let width = 0;
let loadingBar = setInterval(function() { // Set interval is a built-in method in JS given to us by the browser
  if (loadingBarItemEl.style.width == "100%") {
    clearInterval(loadingBar) // Takes in the ID or variable name of the setInterval method to break the loop
  } else {
    width += 1;
    loadingBarItemEl.style.width = `${width}%`;
  }
}, 8)

// Loop through all the buttons and add eventListeners
for (let button of loadingBarButtonEls) {
  button.addEventListener("click", function(event) {
    console.log(event.target.textContent)
    if (event.target.textContent == "30%") {
      loadingBarItemEl.style.width = "30%"
    }
    if (event.target.textContent == "50%") {
      loadingBarItemEl.style.width = "50%"
    }
    if (event.target.textContent == "75%") {
      loadingBarItemEl.style.width = "75%"
    }
    if (event.target.textContent == "Refresh") {
      window.location.reload();
    }
  })
}
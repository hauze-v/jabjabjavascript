// Define references to the button and image result element.
const triggerButtonEl = document.querySelector(".dice__trigger")
const imageResultEl = document.querySelector(".dice__result")

function diceGame() {
  // Event listener for clicking button that randomly displays one of the 6 dice images
  triggerButtonEl.addEventListener("click", function() {
    imageResultEl.src = `images/dice${random()}.png`
  })
}

// Seperate function for grabbing a random number between 1 and 6
function random() {
  return Math.floor(Math.random() * 6 + 1);
}

diceGame()
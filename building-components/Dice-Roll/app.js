// Define references to the button and image result element.
const diceTriggerEl = document.querySelector(".dice__trigger")
const diceImageEl = document.querySelector(".dice__image")

function diceGame() {
  // Event listener for clicking button that randomly displays one of the 6 dice images
  diceTriggerEl.addEventListener("click", function() {
    diceImageEl.src = `images/dice${getRandomNumber()}.png`
  })
}

// Seperate function for grabbing a random number between 1 and 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1)
}

diceGame()
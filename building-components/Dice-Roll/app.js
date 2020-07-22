// Define references to the button and image result element.
const diceTriggerEl = document.querySelector(".dice__trigger")
const diceImageEl = document.querySelector(".dice__image")

function diceGame() {
  // Declare an audio object and assign the dice.mp3 sound
  let diceAudio = new Audio("audio/dice.mp3")

  // Event listener for clicking button that randomly displays one of the 6 dice images
  diceTriggerEl.addEventListener("click", function() {
    // Animate the image
    diceImageEl.classList.add("spin")
    diceImageEl.src = `images/dice${getRandomNumber()}.png`

    // Play dice.mp3
    diceAudio.play()
  })
}

// Seperate function for grabbing a random number between 1 and 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6 + 1)
}

diceGame()
const buttonEl = document.querySelector("button")
const myInputEl = document.querySelector("input")

/* Use the .addEventListener which takes in two arguments. 
First is the type of click and the second is a function */


function sayThings() {
  console.log("this button is clicked!")
}

buttonEl.addEventListener("click", sayThings)

myInputEl.addEventListener("input", function() {
  console.log("you are typing something, or changing something!")
})

/* To remove an event, use .removeEventListener */
buttonEl.removeEventListener("click", sayThings)
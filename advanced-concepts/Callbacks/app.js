/* --- Callbacks in JS --- */
function first(name) {
  console.log(`Yo, ${name}`);
}

function second(alias, callback) {
  callback(alias);
}

second("John", first);

/* A callback function is a function that is passed into another function as an argument and 
this passed in function is invoked in the body of the other function */

/* Common example of callback function is the addEventListener function */
document.addEventListener("click", function(event) {
  // This is the inside of a callback function
})

/* Example 1 */
const greeter = (name, language) => {
  if (language === "English") {
    console.log(`Hello, ${name}!`);
  } else if (language === "Spanish") {
    console.log(`Hola, ${name}!`);
  } else if (language === "Japanese") {
    console.log(`Konichiwa, ${name}!`);
  } else {
    console.log("Idk");
  }
}
// How can we access a single element?
console.log(document.getElementById("logo")) // 1

const logoEl = document.getElementById("logo")
console.log(logoEl) // 2

// Or you can use a querySelector (which you should use because it can be used on just about anything)
console.log(document.querySelector("#logo")) // 3

// Access multiple elements
let choresEl = document.getElementsByClassName("chore");
console.log(choresEl) // Results in an HTML collection (list of things)

let choresOptionalEl = document.getElementsByTagName("li");
console.log(choresOptionalEl)

let paragraphEl = document.querySelectorAll(".random-paragraphs")
console.log(paragraphEl) // Results in a NodeList (another type of list of things)

let nodeListEl = document.querySelectorAll(".chore, .random-paragraphs")
console.log(nodeListEl) // You can even specify more than one class ^


// console.log('hello, world');

let h1El = document.querySelector("h1");
h1El.style.color = "blue";

// Create HTML content in JS
let content = document.createElement("p");
content.innerHTML = "Hey this is the content inside of the p tag";

// Now we can append this content to the body element of our HTML
document.querySelector("body").appendChild(content);
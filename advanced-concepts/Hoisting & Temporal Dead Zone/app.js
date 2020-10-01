/* 
JS Engine is just a program that reads your code and runs it 

There's a
  * creation phase: allocates memory for a future function and variable declarations

  * execution phase: 
*/

greet(); // in JS, we can run a function even before we define it

function greet() {
  console.log(`Hello how are you?`)
}

console.log(randomVariable); // but this would be undefined. The declaration is hoisted, but not the definition
var randomVariable = "Tom";


/* ES6 example */
console.log(randomVar2); // Reference Error (temporal dead zone)
let randomVar2 = "Tim";

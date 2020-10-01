
/* --- Pass by value --- */
let name = "Tom";
let nameCopy = name; // allocates new memory space for nameCopy and assigns value

name += " Hardy";

console.log(name); // Tom Hardy
console.log(nameCopy); // Tom


/* --- Pass by reference (Objects are also known as reference types because they pass by reference) --- */
let fruits = ["cherry", "mango"];
let fruitsCopy = fruits; // points to the same memory address of "fruits"

fruits.push("apple", "banana");

console.log(fruits); // ["cherry", "mango", "apple", "banana"]
console.log(fruitsCopy); // ["cherry", "mango", "apple", "banana"]

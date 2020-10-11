/* --- Callbacks in JS --- */
function first(name) {
  console.log(`Yo, ${name}`);
}

function second(alias, callback) {
  callback(alias);
}

// second("John", first);

/* A callback function is a function that is passed into another function as an argument and 
this passed in function is invoked in the body of the other function */

/* Common example of callback function is the addEventListener function 
document.addEventListener("click", function(event) {
  // This is the inside of a callback function
}) */

/* --- Example 1 --- */
const greeter1 = (name, language) => {
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

greeter1("Adam", "English"); // without callbacks

/* With callbacks */
const greeter2 = (name, callback) => {
  callback(name);
}

const spanish = (name) => {
  console.log(`Hola, ${name}`);
}
const french = (name) => {
  console.log(`Bonjour, ${name}`);
}
const longJapanese = (name) => {
  console.log(`Konichiiiiiiiiwa, ${name}!!!!!!!`);
}

greeter2("John", function(alias) {
  console.log(`Hello, ${alias}`)
});

greeter2("Adam", function(alias) {
  console.log(`Knichiwa, ${alias}`)
})

greeter2("Dustin", spanish);
greeter2("Herman", french);
greeter2("Legoshi", longJapanese);


/* --- Example 2 --- */
const squareZapper = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push(Math.pow(item, 2));
  }
  return result;
}

const doubleZap = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push(item + item);
  }
  return result;
}

const squareRootZap = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push(Math.sqrt(item));
  }
  return result;
}

const upperCaseZap = (arr) => {
  let result = [];
  for (let item of arr) {
    result.push(item.toUpperCase())
  }
  return result;
}

const masterZap = (arr, callback) => {
  let result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const uppercase = (item) => item.toUpperCase();
const double = (item) => item + item;

/* Without callbacks */
console.log(squareZapper([1,2,3]));
console.log(doubleZap([1,2,3]));
console.log(squareRootZap([4, 9, 64]));
console.log(upperCaseZap(["apple", "mango", "banana"]));

/* With callbacks */
console.log(masterZap([1,2,3], function(item) {
  return item * 2;
}))
console.log(masterZap([1,2,3], function(item) {
  return Math.pow(item, 2);
}))
console.log(masterZap(["a", "p", "p"], function(item) {
  return item.toUpperCase();
}))
console.log(masterZap([2,4,6], double));
console.log(masterZap(["adam", "is", "awesome"], uppercase))



































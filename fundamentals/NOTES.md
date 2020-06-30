# Fundamentals #

## String, Number, Boolean, Object, Null, Undefined, Symbol ##

console.log("asll'kjadf;lkja");
console.log("hello");

You can escape inner single quotes by using double quotes on the outside or by escaping it by using a \

console.log(123338); // whole number // integer
console.log(32.2839); // decimal number // floats

In JavaScript, there's only numbers, not floats and integers like in Java or other languages

console.log(true);
console.log(false);

## Variables ##

To create a variable, you must write var and give it a name.

var name = "christopher columbus";
var age = 32;
var gpa = 3.1416;
var isMarried = false;
var hasMoney = true;

## If Statements ##

if (condition) {
  console.log("hello world")
}

var num= 5;

if (num > 0) {
  console.log("POSITIVE")
} else if (num < 0) {
  console.log("NEGATIVE")
} else {
  console.log("it's ZERO")
}

var grade = 90;

if (grade > 90) {
  console.log("A")
} else if (grade >= 80) {
  console.log("B")
} else if (grade >= 70) {
  console.log("C")
} else if (grade >= 60) {
  console.log("D")
} else {
  console.log("fail")
}

## Comparison and Logical Operators ##
Comparison operators are things like (>, <, >=, <=, ==, ===)

Logical operators combine conditions:

var num=3;
if (num > 0 && num % 2 === 0) {
  console.log("positive even")
}

if (num > 0 || num % 2 === 0) {
  console.log("positive or even)
}


## For loops ##
for (statement 1; statement 2; statement 3) {
  code block to be executed
}

for (starting point; condition; increment/decrement) {
  code to be executed
}

for (var i=0; i < 10; i++) {
  console.log("hello")
}


## While loop ##
Start with a starting number of initializer, followed by a condition for when the loop should end, and then an increment or decrement.

It's essentially a broken down for loop.

var i = 0;

while (i < 10) {
  console.log("hello " + i)
  i++;
}

If you know how many times you need to run the loop, use a for loop.

When it's a little more abstract (while it's raining outside), use a while loop.

## Functions ##
This is how you write a funtion and pass in a parameter

function greet(name) {
  console.log("hi")
  console.log("how are you?")
  console.log("I'm" + name + " Nice to meet you.")
}

To run, invoke, or call the function:

greet(Adam);

Example problem:

function signChecker(randomNum) {
  if (randomNum > 0) {
    console.log("Positive.")
  } else if (num < 0) {
    console.log("Negative")
  } else {
    console.log("Zero")
  }
}

signChecker(88)

## Scope - Global, Local, and Block ##
Global scope:

// This is a global variable which can be accessed from anywhere
var fullName = "Joe Hardy";
console.log(fullName);

// Locally scoped variable
function whatever() {
  var age = 58;
}
console.log(age);

// This will result in a referenceError: age is not defined
// You're trying to access age in a global scope when it's a locally scoped variable

// When a variable is inside a function, it's a locally scoped variable

Block scoped didn't used to exist before es6 and let or const.

Let and const allow you to create blocked scoped variables

Remember a block is anything between two curly braces
{

}

When should you use const / let?
const things = "hi";
let newName = "joe Biden"

When you use const and let instead of var, you're preventing errors... so which one should you use, const or let?

const = constant, which means you can't reassign a value to that variable

So use const whenever you can, and if you can't, then use let. (You'll mostly be using let).

## Objects ##
Objects take key value pairs, just like a dictionary

Note that you can make one of the values a function. That function can have a name, like normal, but it can also be an anyonymous function.

Writing the quotes on the key part is optional, but know that they're strings.

const person = {
  "eyes": 2,
  "legs": 2,
  "language": "English",
  "speak": function() {
    return "hiya!";
  }
}

const person = {
  eyes: 2,
  legs: 2,
  language: "English",
  speak: function() {
    return "hiya!";
  }
}

Now, when we have to refer back to this person, we simply do:

person.eyes; // This is called dot notation and it's how you access the objects values
person.legs;
person.language;
person.speak();

A function inside an object is no longer called a function, but rather is called a method.

You can also access them like this:
person["eyes"]
person["legs"]
person["language"]

## Arrays ##


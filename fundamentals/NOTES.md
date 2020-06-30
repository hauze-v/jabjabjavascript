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


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

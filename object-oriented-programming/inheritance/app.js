/* Person object constructor with two parameters */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

/* Prototype function greet that's shared by all Person objects */
Person.prototype.greet = function() {
  return `My name is ${this.name}. I'm ${this.age} years old!`;
}

/* Variable declaration and assignment to new Person object with two arguments */
const a = new Person("sam owens", 35);


/* ------ Child objects under Person ------ */
function Programmer(name, age, language) {
  /* Use the call method to inherit properties from parent objects */
  Person.call(this, name, age);
  this.language = language;
}

/* This gives the Programmer's prototype access to the Person's prototype */
Programmer.prototype = Object.create(Person.prototype);

function Fighter(name, age, art) {
  Person.call(this, name, age);
  this.art = art;
}
Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;

const johnny = new Fighter("John Bones", 79, "Karate")
console.log(johnny.constructor);
/* This is an object literal */
let car = {
  brand: "Lambo",
  model: "Aventador",
  stats: function() {
    return `${this.brand} ${this.model}`
  }
}

/* Function Constructor (this is a class in other programming languages) - creates new object */
/* Think of this as a blueprint or factory */
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
} /* You can't have a return in a function constructor */

/* Prototype is automatically created whenever you define a constructor function */
Car.prototype.stats = function() {
  return `${this.brand} ${this.model}`;
}

/* They create methods that are shared across all objects */
Car.prototype.drive = function() {
  return `${this.model} driving vroooom!`
}

let car1 = new Car('honda', 'civic'); /* Think of this as the product (an instance) */
let car2 = new Car('Toyota', 'Camry'); /* Think of this as the product (an instance) */
let car3 = new Car('Subaru', 'Legacy'); /* Think of this as the product (an instance) */
console.log(car1.stats())
console.log(car2.stats())
console.log(car3.stats())
console.log(car1.drive())


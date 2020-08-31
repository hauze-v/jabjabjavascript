/* Shape constructor function */
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function() {
  console.log(this.sideLength * this.sides);
}

/* Instantiate a square shape object */
let square = new Shape("square", 4, 5);
square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
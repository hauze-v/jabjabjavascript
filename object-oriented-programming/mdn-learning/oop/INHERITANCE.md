# Inheritance in JavaScript #

## Prototypal inheritance ##
So far we've seen some inheritance in action - we have seen how prototype chains work, and how members are inherited going up a chain. But mostly this has involved built-in browser functions. How do we create an object in JavaScript that inherits from another object?

Let's explore how to do this with a concrete example:

## Getting started ##
We'll use the same example we've been using throughout this module, with a slight difference - we'll define only the properties inside the contructor function.

The methods will all be defined on the constructor's prototype property.

Say we wanted to create a `Teacher` class, which inherits all the members from `Person`, but includes: 
  1. A new property, `subject`
  2. An updated `greeting()` method, which sounds a bit more formal than the standard `greeting()`

## Defining a Teacher() constructor function ##
The first thing we need to do is create a `Teacher()` constructor - add the following to the existing code:

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

This looks similar to the Person constructor, but there's something strange we haven't seen before - the `call()` function. This function basically allows you to call a function defined somewhere else, but in the current context. The first parameter specifies the value of `this` that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

We want the `Teacher()` constructor to take the same parameters as the `Person()` constructor it is inheriting from, so we specify them all as parameters in the `call()` invocation.

### Inheriting from a constructor with no parameters ###
Note that if the constructor you are inheriting from doesn't take its property values from parameters, you don't need to specify them as additional arguments in `call()`. So, for example, if you had something really simple like:

function Brick() {
  this.width: 30;
  this.height: 20;
}

You could inherit the `width` and `height` properties by doing this (as well as the other steps described below):
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';

}

## Setting Teacher()'s prototype and constructor reference ##
All is good so far, but we've a problem. We have defined a new constructor, and it has a `prototype property`, which by default just contains an object with a reference to the constructor function itself. It does not contain the methods of the Person constructor's `prototype property`.

Nor does the constructor *inherit* those methods.

We need to get `Teacher()` to inherit the methods defined on `Person()`'s prototype. So how do we do that?
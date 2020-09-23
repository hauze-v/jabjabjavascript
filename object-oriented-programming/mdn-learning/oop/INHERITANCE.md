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

## Giving Teacher() a new greeting() function ##
To finish off our code, we need to define it on `Teacher()`'s prototype - add the following at the bottom of your code:

The technique we covered here is not the only way to create inheriting classes in JavaScript, but it works OK, and it gives you a good idea about how to implement inheritance in JavaScript.

You might also be interested in checking out some of the new ECMAScript features that allow us to do inheritance more cleanly in JavaScript (classes). We didn't cover those here, as they are not yet supported very widely across browsers. All the other code constructs we discussed in this set of articles are supported as far back as IE9 or earlier, and there are ways to achieve earlier support than that.

A common way is to use a JavaScript library - most of the popular options have an easy set of functionality available for doing inheritance more easily and quickly.

`CoffeeScript` for example provides `class`, `extends`, etc.

## Object Member Summary ##
To summarize, we've got four types of property/methods to worry about:

  1. Those defined inside a constructor function that are given to object instances. These are easy to spot - the members defined inside a constructor using the `this.x = x` type lines

  2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, *not* an instance. For example, `Object.keys()`. These are known as **static properties/methods**.

  3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's `prototype` property, e.g `myConstructor.prototype.someFunction().`

  4. Those available on an object instance, which can either be an object created when a constructor is instantiated like we saw above, or an object literal.

## ECMAScript 2015 Classes ##
In this section, we'll convert the Person and Teacher examples from prototypal inheritance to class-based inheritance.

Let's look at a rewritten version of the Person example, class-style:

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
  }

  greeting() {
    // ...
  }

  farewell() {
    // ...
  }
}

**Note**: Under the hood, our classes are being converted into Prototypal Inheritance models - this is just syntactic sugar. But as you can see, it's easier to write.

### Inheritance with class syntax ###
Above, we created a class to represent a person. They have a series of attributes that are common to all people; in this section we'll create our specialized `Teacher` class, making it inherit from `Person` using modern class syntax. This is called creating a subclass or subclassing.

To create a subclass we use the `extends keyword` to tell JavaScript the class we want to base our class on.

class Teacher extends Person {
  constructor(subject, grade) {
    this.subject = subject;
    this.grade = grade;
  }
}

... but there's a little catch.

Unlike old-school constructor functions where the `new operator` does the initialization of `this` to a newly-allocated object, this isn't automatically initialized for a class defined by the `extends` keyword (i.e. the subclass).

Therefore, running this code would result in an error:
`Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor`

For sub-classes, the `this` initialization to a newly allocated object is always dependant on the parent class constructor, i.e. the constructor function of the class from which you're extending.

Here we are extending the `Person` class - the `Teacher` sub-class is an extension of the `Person` class, So for `Teacher`, the `this` initialization is done by the `Person` constructor.

## Getters and Setters ##
There may be times when we want to change the values of an attribute in the classes we create or we don't know what the final value of an attribute will be. Using the Teacher example, we may not know what subject the teacher will teach before we create them, or their subject may change between terms.

We can handle such situations with getters and setters.

Let's enhance the Teacher class with getters and setters. The class starts the same...

Getters and setters work in pairs. A getter returns the current value of the variable and its corresponding setter changes the value of the variable to the one it defines.

The modified `Teacher` class looks like this:

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    this.subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

We use the _ to create a separate value in which to store our name property. Without using this convention, we would get errors everytime we called get or set. At this point:
  To show the current value of the _subject property of the snape object, we can use the snape.subject getter method.
  To assign a new value to the _subject property we can use the snape.subject = "new value" setter method
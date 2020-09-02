# Object Prototypes #
Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this lesson, we'll explain how prototype chains work and look at how the `prototype` property can be used to add methods to existing constructors.

## A prototype-based language? ##
JavaScript is often described as a **prototype-based language** - to provide inheritance, objects can have a **prototype object**, which acts as a template object that inherits methods and properties from the other objects.

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a **prototype chain**, and explains why different objects have properties and methods defined on other objects available to them.

In JavaScript, a link is made between the object instance and its prototype (its __proto__property, which is derived from the `prototype` property on the constructor), and the properties and methods are found by walking up the chain of prototypes.

*Note*: It's important to understand that there is a distinction between **an object's prototype** (available via `Object.getPrototypeOf(obj)`, or via the deprecated __proto__ property) and **the prototype property on constructor functions**.

The former is the property on each instance, and the latter is the property on the constructor. That is, `Object.getPrototypeOf(new Foobar()) refers to the same object as Foobar.prototype.

Let's look at an example to make things clearer.

## Understanding prototype objects ##
Here we'll 
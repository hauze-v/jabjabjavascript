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
Here we'll go back to the example in which we finished writing our `Person()` constructor. 

If you type 'person1' into your JavaScript console, you should see the browser try to auto-complete this with the member names available on this object.

In this list, you'll see the members defined on person1's constructor - `Person() - name, age, gender, interests, bio, and greeting`. You'll also notice, however, other members - `toString, valueOf`, etc - these are define on `person1`'s prototype object's prototype object, which is `Object.prototype`.

`person1` --> inherits from prototype --> `Person()` --> inherits from prototype `Object`

What happens when you call a method on `person1`, which is actually defined on `Object.prototype`?

`valueOf()` returns the value of the object it is called on. In this case, what happens is:
    - The browser initially checks to see if `person1` object has a `valueOf()` method available on it, as defined on its constructor, `Person()` AND IT DOESN'T
    - The browser then checks to see if the `person1`'s prototype object has a `valueOf()` method available on it. It doesn't, so then the browser checks `person1`'s prototype object's prototype object, and it *does* have one. So the method is called, and all is good!

*Note*: The methods and properties are **not** copied from one object to another in the prototype chain. They are *accessed* by *walking up the chain*.

*Note*: Before ECMAScript 2015, there wasn't officially a way to access an object's **prototype** directly - the "links" between the items in the chain are defined in an internal property, referred to as [[prototype]] in the specification for JS.

Most modern browsers however, do offer a property called __proto__, which contains the object's constructor's **prototype** object. For example, try person1.__proto__ and person1.__proto__.__proto__ to see what the chain looks like in code.

Since ECMAScript 2015, you can access an object's prototype object indirectly via `Object.getPrototypeOf(obj)`

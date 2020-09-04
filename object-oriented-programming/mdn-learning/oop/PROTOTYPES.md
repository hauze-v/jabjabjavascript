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


## The prototype property: Where inherited members are defined ##
Inherited properties and methods are ones defined on the `prototype` property - that is, the ones that begin with `Object.prototype`. The `prototype` property's value is an object, which is basically a bucket for storing properties and methods that we want to be inherited by objects further down the prototype chain.

So `Object.prototype.toString()`, `Object.prototype.valueOf()`, etc. are available to any object types that inherit from `Object.prototype`, including new object instances created from our `Person()` constructor.

`Object.is()`, `Object.keys()`, and other members *not* defined inside the prototype buckeet are not inherited by object instances or object types that inherit from `Object.prototype`

**Note**: This seems strange - how can you have a method defined on a constructor, which is itself a function?

Well, a function is also a type of object.

1. You can check out existing prototype properties for yourself - go back to our previous example and try entering the following into the JavaScript console:

2. The output won't show you very much because we haven't defined anything on our custom constructor's prototype, but you should see a prototype property which contains an Obect (the parent prototype) and the respective properties and methods there.

    Here you'll see large number of methods defined on `Object's prototype` property, which are then available to objects that inherit from `Object`, as we know.

You'll see other examples of prototype chain inheritance all over JavaScript - try looking for the methods and properties defined by the prototype of the String, Date, Number, and Array global objects, for example. These all have a number of members defined on their prototype, which is why for example, when you create a string like this:

let myString = 'This is my string.';

`myString` immediately has a number of userful methods available on it, like `split()`, `indexOf()`, `replace()`, etc.

**Note**: The `prototype` property is one of the most confusingly-named parts of JavaScript - you might think that `this` points to the prototype object of the current object, but it doesn't (that's an internal object that can be accessed by __proto__). `prototype` instead is a property containing an object on which you define members that you want to be inherited.
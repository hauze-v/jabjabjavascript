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

`Object.is()`, `Object.keys()`, and other members *not* defined inside the prototype bucket are not inherited by object instances or object types that inherit from `Object.prototype`

**Note**: This seems strange - how can you have a method defined on a constructor, which is itself a function?

Well, a function is also a type of object.

1. You can check out existing prototype properties for yourself - go back to our previous example and try entering the following into the JavaScript console:

2. The output won't show you very much because we haven't defined anything on our custom constructor's prototype, but you should see a prototype property which contains an Object (the parent prototype) and the respective properties and methods there.

    Here you'll see large number of methods defined on `Object's prototype` property, which are then available to objects that inherit from `Object`, as we know.

You'll see other examples of prototype chain inheritance all over JavaScript - try looking for the methods and properties defined by the prototype of the String, Date, Number, and Array global objects, for example. These all have a number of members defined on their prototype, which is why for example, when you create a string like this:

let myString = 'This is my string.';

`myString` immediately has a number of userful methods available on it, like `split()`, `indexOf()`, `replace()`, etc.

**Note**: The `prototype` property is one of the most confusingly-named parts of JavaScript - you might think that `this` points to the prototype object of the current object, but it doesn't (that's an internal object that can be accessed by __proto__). `prototype` instead is a property containing an object on which you define members that you want to be inherited.

## Revisiting create() ##
Earlier, we went over the `Object.create()` method and how it can be used to create a new object based off another

let person2 = Object.create(person1);

What create() actually does is create a new object from a specified prototype object. Here, `person2` is being created using `person1` as a
prototype object. You can check this by entering the following in the console.

## The constructor property ##
Every constructor function has a `prototype` property whose value is an object containing a `constructor` property. This `constructor` property points to the original constructor function

Looking at our example, properties defined on the `Person.prototype` property (or in general on a constructor function's `prototype property`, which is an object) become available to all the instance objects created using the `Person()` constructor. Hence, the constructor property is also available on both `person1` and `person2` objects.

For example:
`person1.constructor`
`person2.constructor`

These should both return the `Person()` constructor, as it contains the original definition of these instances.

## Modifying Prototypes ##
Let's try modifying the `prototype property` of a constructor function - methods added to the prototype are then available to all object instances created from the constructor. At this point, we'll finally add something to our `Person()` constructor's prototype.

Add the following below our Person() constructor.

Person.prototype.farewell = function() {
    alert("this.name.first + " has left the building. Bye for now!")
}

You should get an alert message displayed, featuring the person's name as defined inside the constructor. This is really useful, but what is even more useful is that the whole inheritance chain has updated dynamically, automatically making this new method available on all object instances derived from the constructor.

Even when we define the constructor first, create an instance object from the constructor, and *then* add a new method to the constructor's prototype, the `farewell()` method is *still* on the `person1` and `person2` object instances - its members have been automatically updated to include the newly define `farewell()` method.

You'll rarely see properties defined on the prototype property, because they are not very flexible when defined like this. For example, you could add a property like:

`Person.prototype.fullName = 'Bob Smithers';`

This isn't very flexible, as the person might not be called that. It'd be much better to build the `fullName` out of `name.first` and `name.last`:

`Person.prototype.fullName = ${this.name.first} ${this.name.last}`

However, this doesn't work. That's because `this` will be referencing the global scope in this case, not the function scope. Calling this property would return `undefined`. This worked fine on the method we defined earlier in the prototype because it's sitting inside a function scope, which will be transferred successfully to the object instance scope. So you might define constant properties on the prototype (i.e. ones that never need to change), but generally it works better to define properties inside the constructor.

In fact, a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. This makes the code easier to read, as the constructor only contains the property definitions, and the methods are split off into separate blocks. 
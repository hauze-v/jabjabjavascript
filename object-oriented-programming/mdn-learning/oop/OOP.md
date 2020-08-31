# Object-Oriented Programming #
Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have. Object data ( and often, functions too) can be stored neatly (the official word is **encapsulated**) inside an object package (which can be given a specific name to refer to, which is sometimes called a **namespace**), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network.

### Defining an object template ###
**Abstraction** - creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

From our class, we can create **object instances** - objects that contain the data and functionality defined in the class. (Quick note, that defining a variable means giving it value while declaring it means simply stating its' existence)

When an object instance is created from a class, the class's **constructor function** is run to create it. This process of creating an object instance from a class is called **instantiation** - the object instance is **instantiated** from the class.

### Specialist classes ###
In OOP, we can create new classes based on other classes - these new **child classes** can be made to **inherit** the data and code features of their **parent class**, so you can reuse functionality common to all object types rather than having to duplicate it. Where functionality differs between classes, you can define specialized features directly on them as needed.

This is really useful - teachers and students share many common features such as name, gender, and age, so it's convenient to only have to define those features once. You can also define the same feature separately in different classes, as each definition of that feature will be in a different namespace. For example, a student's greeting might be different than that of a teacher's.

*Note* The fancy word for the ability of multiple object types to implement the same functionality is **polymorphism**.

## Constructors and object instances ##
JavaScript uses special functions called **constructor functions** to define and initialize objects and their features. They are useful because you'll often come across situations in which you don't know how many objects you will be creating; constructors provide the means to create as many objects as you need in an effective way, attaching data and functions to them as required.

Let's explore creating classes via constructors and creating object instances from them in JavaScript.

1. We'll start by looking at how you could define a person with a constructor function
      The constructor function is JavaScript's version of a class. Notice that it has all the features you'd expect in a function, although it doesn't return anything or explicity create an object - it basically just defines properties and methods.

      *Note* A constructor function name usually starts with a capital letter - this convention is used to make constructor functions easier to recognize in code
      
      In each case, the new keyword is used to tell the browser we want to create a new object instance, followed by the function name with its required parameters contained in parentheses, and the result is stored in a variable - very similar to how a standard function is called.

      When we are calling our constructor function, we are defining greeting() every time, which isn't ideal. To avoid this, we can define functions on the prototype instead, which we will look at later.

## Other ways to create object instances ##
So far we've seen two different ways to create an object instance - declaring an object literal and using a constructor function.

### The Object() constructor ###
First of all, you can use the Object() constructor to create a new object. Yes, even generic objects have a constructor, which generates an empty object

let person1 = new Object()

### Using the create() method ###
Constructors can help you give your code order - you can create consturctors in one place, then create instances as needed, and it's clear where they came from.

However, some peopel prefer to create object instances without first creating constructors, especially if they are creating only a few instances of an object. JavaScript has a built-in method called `create()` that allows you to do that. With it, you can create a new object based on an existing object.

let person4 - Object.create(person1);

This defines a new object (person4) based on the already define object (person1) - it will have the same properites and method's available to person1

One limitation of `create()` is that IE8 doesn't support it. So constructors may be more effective if you want to support older browsers.

We'll explore the effects of `create()` in more detail later on.
      
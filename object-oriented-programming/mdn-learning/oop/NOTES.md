# Object Oriented Programming in JavaScript #
An object is a collection of related data and/or functionality (which usually consists of several variables and functions - which are called properties and methods when they are inside objects).

An object is made up of multiple members, each of which has a name (e.g. `name` and `age` in an example `person` obj) and a value. Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon.

The value of an object member can be pretty much anything - in our person object we've got a string, a number, two arrays, and two functions. The first four items are data items, and are referred to as the object's `properties`. The last two items are functions that allow the object to do something with that data, and are referred to as the object's `methods`.

An object like this is referred to as an `object literal` - because we've literally written out the object contents as we've come to create it. This is in contrast to objects instantiated from classes, which we'll look at later on.

It's pretty common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it's easier to work with than an array, when you want to identify individual items by name.

## Dot notation ## 
We access property values and methods from the object by using the namespace followed by a dot, and then the value:

person.name;
person.age;
person.greeting();

There can even be sub-namespaces which simply means an object inside an object, but you can easily access those values using dot notation as well:

person.name.first;
person.name.last;

## Bracket notation ##
There's another way to access object properties -- using bracket notation. Instead of these: 

person.age;
person.name.first;

You can use these:

person['age'];
person['name']['first'];

This looks very similar to how you access the items in an array, and it's basically the same thing - instead of using an index number to select an item, you are using the name associated with each member's value.

## Setting object members ##

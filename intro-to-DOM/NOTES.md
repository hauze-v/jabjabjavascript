# Intro to the DOM & BOM #
It's best practice to place your linking script tag at the bottom of your body instead of at the bottom of the header.
This way, if you have JS code that takes a long time to execute, the user isn't just sitting there with a blank page waiting for the code to execute.

Document object model and brower object model

Before we understand the DOM, we need to understand what an API is.

## APIs ##
Application programming interfaces are constructs made available in programming languages to allow developers to create complex functionalty more easily.

APIs allow you to write better software easily, they're a communication medium between two programs and a DOM is simply an API.

As a real world example, think about the electricity supply in your house, apartment, or other dwelling. If you want to sue an appliance in your house, you simply plug it into a wall socket and it works. You don't try to wire it directly into the power supply -- to do so would be really inefficient and, if you are not an electrician, difficult and dangerous to attempt.

In the same way, if you want to say, program some 3D graphics, it is a lot easier to do it using an API written in a higher-level language such as JavaScript or Python, rather than try to directly write low level code (say C or C++) that directly controls the computer's GPU or other graphics functions.

Client-side JavaScript, in particular, has many APIs available to it - these are not part of the JavaScript language itself, rather they are built on top of the core JavaScript language, providing you with extra superpowers to use in your JavaScript code. They generally fall into two categories:

  * **Browser APIs** are built into your web browser and a re able to expose data from the browser and surrounding computer environment and do useful complex things with it. For example, the Web Uadio API provides JavaScript constructs for manipulating audio in the browser - taking an audio track, altering its volumne, applying effects to it, etc.
  * **Third-party APIs** are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web. For example, the Twitter API allows you to do things like display your latest tweets on your website. It provides a special set of constructs you can use to query the Twitter service and return specific information.

## Relationship between JavaScript, APIs, and other JavaScript Tools ##
Let's recap to make it clearer, and also mention where other JavaScript tools fit in:
  * JavaScript - a high-level scripting language built into browsers that allows you to implement functionality on web pages/ apps. Note that JavaScript is also available in other programming environments, such as Node.
  * Browser APIs - constructs built into the brwoser that sits on top of the JavaScript language and allows you to implement functionality more easily
  * Third-party APIs - constructs built into third-party platforms (e.g. Twitter, Facebook) that allow you to use some of those platform's functionality in your own web pages (for example, displaying your latest Tweets on your website).
  * JavaScript libraries - Usually one or more JavaScript files containing custom functions that you can attach to your web page to speed up or enable wriing common functionality. Examples include JQuery, MooTools, and React.
  * JavaScript frameworks - The next step up from libraries, JavaScript frameworks (e.g. Angular, Vue, Ember) tend to be packages of HTML, CSS, JavaScript, and other technologies that you install and then use to write an entire web application from scratch. The key difference between a library and a framework is "Inversion of Control". When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.

## Common DOM and BOM methods ##
DOM methods:
document.getElementById()
document.getElementByTagName()
document.querySelector("body").innerHTML = "I'm just changing stuff";
document.querySelector("body").style.color = "red";

BOM methods: (the window object has a ton of properties)
alert("hey");
open() -- opens a new tag
location -- gets you the URL of the page
innerHeight
innerWidth


## Quick difference between 'function' and 'method' ##
In JavaScript, every function is an object. An object is a collection of key:value pairs. If a value is a primitive (number, string, boolean), or another object, the value is considered a property. If a value is a function, it's called a method.

Within the scope of an object, a function is referred to as a method of that object. It is invoked from the object namespace `MyObj.theMethod()`. Since we said that a function is an object, a function within a function can be considered a method of that function.

## Difference between nodes and elements ##
In the DOM heirarchy, everything is a Node.

An element, is a specific type of Node. For example, take a paragraph tag. The p tag itself is the paragraph node and the text inside is called the text node. Together though, they're called an Element. There are lots of other Nodes on the DOM, like comments. HTML comments are nodes as well.

Just know that the DOM is made up of many Nodes and Nodes sit above elements in the heirarchy.

## Null && Undefined ##
Let's say you try to console.log something that does not exist, you'll receive a "ReferenceError: age is not defined"

Not defined. In this case.

If you define it but don't assign it anything, you'll receive: "undefined"

let age;
console.log(age) // this will be "undefined"

Undefined means a variable was declared, but not defined.

If you give a variable that's declared, a value of null, it will return null. It's how you can avoid undefined errors when you want something to be blank or have no value.

Because of that, null is safer.

## Changing Attributes with JavaScript ##
Use the .getAttribute and .setAttribute methods

## DOM Traversals ##
Sometimes we need more than being able to just grab one thing on the DOM, directly.

Sometimes we need to travel, walk, or traverse through things on the Document Object Moodel.

In the DOM heirarchy, since everything's a node, we have something called the parent/child relationship. We also have a sibling relationship.

In our image example, the ul node is the "parentNode" and the li nodes are children of the ul nodes. The li node in the middle has even more childNodes. You can access the first child by using the firstChild property and the last by using the lastChild property.

The li in the middle has a previousSibling property and a nextSibling property.

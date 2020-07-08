/* Place your references to various HTML nodes */
const todoEl = document.querySelector(".todo");
const todosEl = document.querySelectorAll(".todo__item");

/* --- PARENT NODES --- */

/* Using one element to chain through the DOM */
console.log(todoEl.parentNode.parentNode)

/* Note that you need a single item in order to use parentNode, so for todosEl, because it's a nodeList we have to specify the first node: */
console.log(todosEl[0].parentNode);

/* ParentNode is a lot more common. One of the differences is when you talk about the root element. But it's not that important. Just use parentNode */

/* --- CHILDREN NODES --- */
console.log(todoEl.childNodes) // when we use child nodes, you'll get all the nodes, including text nodes, attribute nodes, and comment nodes
console.log(todoEl.firstChild) // this will give you the first child node (often a text node)
console.log(todoEl.lastChild) // this will give you the last child node (often a text node)

/* --- CHILDREN ELEMENT NODES */
console.log(todoEl.children) // when we use children, this will only give you the element nodes
console.log(todoEl.firstElementChild) // this will give you the first element node
console.log(todoEl.lastElementChild) // this will give you the last element node

/* --- SIBLING NODES ---*/
console.log(todosEl[1].previousSibling); // this will give you the previous node
console.log(todosEl[1].nextSibling); // this will give you the next node

console.log(todosEl[1].previousElementSibling); // gives you the previous element
console.log(todosEl[1].nextElementSibling); // gives you the next element


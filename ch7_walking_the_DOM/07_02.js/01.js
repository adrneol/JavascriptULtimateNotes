// Children, Siblings, and Parents
console.log("First child");
console.log(document.body.firstChild); // access the first child of the body element, rn its text node.

// element.child[0] === element.firstChild, ex document.body.firstChild === document.body.childNodes[0] is true, because childNodes is a collection of all the child nodes of the element, including text nodes and comment nodes.

// elemet.childnodes[element.childNodes.length - 1] === element.lastChild, ex document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild is true, because childNodes is a collection of all the child nodes of the element, including text nodes and comment nodes.

console.log("Last child");
console.log(document.body.lastChild); // access the last child of the body element, rn its text node.
console.log("All children");
console.log(document.body.childNodes); // access all the child nodes of the body element, rn its text node and span element. and its not array, its a collection of nodes. 
console.log("All children as array");
let arr = Array.from(document.body.childNodes); // convert the collection of nodes into an array using Array.from() method.
console.log(arr); // log the array of child nodes of the body element, rn its text node and span element. and its an array of nodes.

// https://chatgpt.com/s/t_69dbfaf0bbe481918daf53f15ba89e54
console.log(document.body.hasChildNodes()); // check if the body element has child nodes, rn it has child nodes because it has a text node, div, and script element as child nodes. hence, it will return true.
console.log(document.body.childNodes[3].hasChildNodes()); // check if the fourth child(script tag) node of the body element has child nodes or not. return value is false.

console.log(document.body.childNodes);
console.log(Array.from(document.body.childNodes)); //
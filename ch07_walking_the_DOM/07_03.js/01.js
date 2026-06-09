console.log(document.body.firstChild);
a= document.body.firstChild
console.log(a.parentNode); // access the parent node of the first child of the body element, rn its body element.
console.log(a.parentElement);
console.log(a.firstChild.nextSibling); // access the next sibling of the first child of the body's first element.

console.log(document.documentElement.parentNode); // access the parent node of the document's root element, which is the document object.
console.log(document.documentElement.parentElement); // access the parent element of the document's root element, which is null.
/*
document.documentElement.parentNode === document
document.documentElement.parentElement === null. because document.documentElement is the root element of the document, and it does not have a parent element, hence its parentElement property is null. However, its parentNode property is the document object itself, which is the parent node of the root element.
*/
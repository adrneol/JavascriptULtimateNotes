// in all the below methods the specifier must be belong to the element. example any tag of the html is element.
// document.getElementsByClassName
a = document.getElementsByClassName("card-title")[0]; //// [0] selects the first element from the returned list of matching classes. and getElementsByClassName returns a live HTMLCollection of elements with the specified class name(s).
// change the card title to the red
a.style.color = "red";
a.style.backgroundColor = "purple";

// document.getElementsByid
ctext = document.getElementById("cardText"); // getElementById returns a reference to the first object with the specified id.
ctext.style.color="pink";

// documnet.querySelectorforAll
ctitle = document.querySelectorAll(".card-title"); // querySelectorAll returns a static NodeList of all elements that match the specified CSS selector(s). "." is used to select elements by class name. and # is used to select elements by id.
ctitle[1].style.color = "blue"; // [1] selects the second element from the returned list of matching selectors.
ctitle[2].style.color = "green";


document.querySelector(".this").style.color = "white";  //document.querySelector() only returns a single, individual element (the very first one it finds on the page).
document.querySelector(".this").style.backgroundColor = "black"; 
// not a good practice to do "document.querySelector(".this").style.backgroundColor = "black";".

// document.getElementsByTagName
console.log(Array.from(document.getElementsByTagName("a"))); // getElementsByTagName returns a live HTMLCollection of elements with the given tag name. and "a" is used to select all anchor tags in the document.
console.log(document.querySelector(".card").getElementsByTagName("a")); // getElementsByTagName can be used on any element to find all descendant elements with the specified tag name. in this case it will return an HTMLCollection of all anchor tags that are descendants of the first element with the class "card-title".

// getElementsByName
console.log(document.getElementsByName("search")); // getElementsByName returns a live NodeList of elements with the given name attribute. and "search" is used to select all elements with the name attribute equal to "search". in this case it will return a NodeList of all input elements with the name "search".
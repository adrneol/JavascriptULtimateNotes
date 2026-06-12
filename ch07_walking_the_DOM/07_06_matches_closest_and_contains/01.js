console.log(id1); // will fetch the element with id "id1" and log it to the console. if there is no element with id "id1", it will log null. tho, its not a good practice to use this method to access elements by id, as it can lead to confusion and conflicts with variables in the global scope. it's better to use document.getElementById("id1") instead. AND not all browsers support this method, so it's not recommended to rely on it for accessing elements by id.

let Id1  = document.getElementById("id1"); 
let sp1  = document.getElementById("sp1"); 
console.log(Id1); // best practice.
console.log(Id1.matches(".class")); //false, doesnt match class="class"
console.log(Id1.matches(".box")); //true

// closet
console.log(sp1.closest(".box")); // from the sp1 root position, it travere up the dom from parent to parent until it finds an element that matches the selector ".box". if it finds such an element, it returns it. if it doesn't find any matching element, it returns null. in this case, it will return the element with class "box" that is an ancestor of sp1.
console.log(sp1.closest("#sp1")); // writes itself on the console.

// contains
console.log(Id1.contains(sp1)); // true, because sp1 is a descendant of Id1. the contains() method checks if the element on which it is called (Id1) contains the specified element (sp1) as a descendant. if sp1 is indeed a descendant of Id1, it returns true; otherwise, it returns false.
console.log(sp1.contains(sp1));// true for same id check.
console.log(sp1.contains(Id1)); // false, because Id1 is not a descendant of sp1. the contains() method checks if the element on which it is called (sp1) contains the specified element (Id1) as a descendant. since Id1 is not a descendant of sp1, it returns false.
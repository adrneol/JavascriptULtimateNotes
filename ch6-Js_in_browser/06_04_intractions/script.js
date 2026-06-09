alert("Your alert message here!");
let a = prompt("Enter a number for a ");
alert("You entered typeof a: " + typeof a); // This line will display an alert showing the type of the variable 'a'. Since the value entered through prompt is always a string, it will show "string" as the type.
document.write("The value of a is: " + a); // document.write() is used to write content directly to the HTML document. It can be used to display the value of a variable or any other content on the webpage. In this case, it will display the value of the variable 'a' that was entered by the user through the prompt.

let b = prompt("Enter a number for b ");
alert("You entered typeof b: " + typeof b); // Similar to the previous alert, this will show the type of variable 'b', which will also be "string" for the same reason as 'a'.

let c = prompt("Enter a number for c ");
c = Number.parseInt(c); // This line converts the string input from the prompt into an integer using Number.parseInt(). If the input cannot be converted to a number, it will return NaN (Not-a-Number).
alert("You entered typeof c: " + typeof c); // This will show the type of variable 'c'. After conversion, it should show "number" if the input was a valid number, or "number" with a value of NaN if the input was not a valid number.
document.write("The value of c is: " + c); // This will display the value of the variable 'c' on the webpage.

// we can pass default value to prompt
let d = prompt("Enter a number for d ", 90);
alert("You entered typeof d: " + typeof d);
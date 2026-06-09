alert("This is a confirm concept!");
let a  = prompt("Enter a number for a ", 90);
a=Number.parseInt(a);
alert("You entered typeof a: " + typeof a);
let put = confirm("Do you want to see the value of a ?");
if(put){
    document.write("The value of a is: " + a);}
else{
    document.write("You have cancelled the action.");
}

// Reasons not to use promt, alert and confirm, that these blocks JS main execution threads and can lead to a poor user experience if overused. They can be disruptive and may not provide the best way to gather user input or display information. Instead, consider using more modern techniques such as modals, forms, or custom dialogs that allow for better control over the user interface and do not block the main execution thread.
// In addition, these functions are often considered outdated and may not be supported in all browsers or may have inconsistent behavior across different platforms. Using more modern approaches can help ensure better compatibility and a more seamless user experience.
// However, they can be used in admin panels or for debugging purposes, where blocking the main execution thread is not a concern and quick user input or alerts are needed.
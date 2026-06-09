let number = prompt("Enter a number: ");
number = Number.parseInt(number);
if(number>4){
    location.href = "https://www.google.com";
}
else if (number==4){
    location.reload(); // reloads the current page
}
else{
    location.href = "https://www.youtube.com";
}
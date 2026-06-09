let str = "Andry"
str[3]="Z";  // also wont show any error, but it will not change the string
console.log(str); // Andry
// string is immutable, we cannot change the value of a string by index. We can only create a new string with the desired changes.
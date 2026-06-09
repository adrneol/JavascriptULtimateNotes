// callback
function greet(name, callback) {
    console.log("Hello", name);
    callback();   // run later
}

greet("Adrneol", function () {
    console.log("This runs after greeting");
});

// prompt-sync, a package to get user input in nodejs
const promt = require('prompt-sync')();
let i = promt("Enter a number: ");
console.log("You entered:", i);
console.log(console); // display all console methods and properties in the console of the browser
console.info("This is an info message");
console.warn("This is a warning message");
console.error("This is an error message");
console.assert(1 === 2, "This assertion failed");
console.table([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);
console.assert("This is an error message" !=false)
console.assert("This is an error message" ==false)

console.time("myTimer");
for (let i = 0; i < 10000000000; i++) {
  // Some time-consuming operation. took 22 seconds in my system
}
console.timeEnd("myTimer");
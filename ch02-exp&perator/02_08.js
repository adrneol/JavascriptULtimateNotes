// switch case
const fruits={
    apple : "0.9$",   // js convers apple to string automatically
    "banana" : "1.1$",
    "mango" : "2.5$",
    "pineapple" : "3$"
}
console.log("The available fruits are:",Object.keys(fruits)); // Print all the keys of the fruits object

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('Enter the fruit name', (fruit) => {
    fruit = fruit.toLowerCase(); // Convert the input to lowercase to handle case sensitivity       
  switch(fruit){
    case "apple":
        console.log("Apple price is:", fruits.apple);
        break;
    case "banana":
        console.log("Banana price is:", fruits.banana);
        break;
    case "mango":
        console.log("Mango price is:", fruits.mango);
        break;
    case "pineapple":
        console.log("Pineapple price is:", fruits.pineapple);
        break;
    default:
        console.log("Fruit not available");
} 
  readline.close();
});
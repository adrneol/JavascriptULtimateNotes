const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('age', (age) => {
    // age = Number.parseInt(age);
    console.log(age>18? "u can drive":"u cant drive");
  readline.close();
});
// Number(age) > 18 internal conversion done by JS

/* 
age = Number(age);
if (Number.isNaN(age)) {
  console.log("Invalid age");
} else {
  console.log(age > 18 ? "u can drive" : "u cant drive");
}
*/
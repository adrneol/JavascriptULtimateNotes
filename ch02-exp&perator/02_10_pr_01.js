const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter age', (age) => {
  age = Number.parseInt(age);
  if (age>10&&age<20){
    console.log("age is between 10 and 20");
  }
  else{
    console.log("age is not between 10 and 20");
  }
  readline.close();
});
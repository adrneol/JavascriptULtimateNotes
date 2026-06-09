const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
const cn = 50;
const guess=()=>{
readline.question('Enter a number: ', (i) => {
   i = Number(i);
  if(i===cn){
    console.log("Congratulations!, you guessed the number!", i);
    readline.close();
  }
  else{
    console.log("Try again!");
    guess();
  }
  
});}
guess();
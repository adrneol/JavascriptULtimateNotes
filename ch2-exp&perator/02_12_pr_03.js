const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('number \n', (num) => {
    console.log(typeof num);
  if(num%2===0 && num%3===0){
    console.log("Number is divisible by 2 and 3");
  }
  else{
    console.log("Number is not divisible by 2 and 3");
  }
  readline.close();
});

/* 
2️⃣ % forces numeric conversion

When JS sees:
num % 2
It internally does:
Number(num) % 2

So:
"6" % 2  →  6 % 2  →  0
"6" % 3  →  6 % 3  →  0

Now the type is number, not string.
*/

// proof of % always return number
console.log(typeof ("6" % 2)+"0k");   // "number"
// console.log(typeof ("6" % 3));   // "number"
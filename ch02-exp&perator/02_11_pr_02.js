// use of switch case
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter marks', (marks) => {
  marks = Number.parseInt(marks);
  // switch(marks){
    switch(true){ // we use switch(true) for case in rnage like marks>=90 becuz its boolean and switch expression is also boolean, switch do strict comparison ===, so boolean===boolean works
    case (marks>=90):
    // case 90: only works for marks===90, but we want marks>=90, so we use switch(true) for case in range like marks>=90 becuz its boolean and switch expression is also boolean, switch do strict comparison ===, so boolean===boolean works
      console.log("Grade A");
      break;
    case (marks>=80):
      console.log("Grade B");
      break;
    case (marks>=70):
      console.log("Grade C");
      break;
    case (marks>=60):
      console.log("Grade D");
      break;
    default:
      console.log("Grade F");
  }
  readline.close();
});
// marks → number

// marks >= 90 → boolean

// number === boolean → ❌ never matches, thats why we use switch(true) for case in rnage like marks>=90 becuz its boolean and switch expression is also boolean, switch do strict comparison ===, so boolean===boolean works
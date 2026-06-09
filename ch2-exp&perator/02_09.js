//  teranry operator
let str = "teranry operator example";
let result = str+1;
console.log((result===str) ? "Teranry operator example" :"mismatched string variable", console.log(result));


// doubt of my question- putting expression inside false block of ternary operator.
/*
Method 2 — Use comma operator (rare but valid)
console.log(
  (result === str)
    ? "Teranry operator example"
    : (console.log(result), "mismatched string variable")
);

Method 3 — Put ternary inside else
console.log(
  result === str
    ? "Teranry operator example"
    : `mismatched string variable, result = ${result}`
);
 */
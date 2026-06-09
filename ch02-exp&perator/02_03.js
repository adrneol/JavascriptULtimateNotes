// comparison operators
let compare1 = 5;
let compare2 = 6;
console.log("compare1 == compare2:", compare1 == compare2); //false
console.log("compare1 != compare2:", compare1 != compare2); //true
console.log("compare1 > compare2:", compare1 > compare2); //false
console.log("compare1 < compare2:", compare1 < compare2); //true
console.log("compare1 >= compare2:", compare1 >= compare2); //false
console.log("compare1 <= compare2:", compare1 <= compare2); //true

// triple = check -> checks both, value AND Datatype
let compareA = 5;
let compareB = "5";
let compareC = 5;
let compareD = 6;
console.log("compareA === compareB:", compareA === compareB); //false BECUZ datatype is different
console.log("compareA === compareC:", compareA === compareC); //true, BOTH value and datatype are same
console.log("compareA === compareD:", compareA === compareD); //false, value IS different

const obj ={
    Adrneol:22,
    Bredan:25,
    Celine:24,
    kayla:23,
    Dwayne:26
}
// for...in  iterates over the keys of an object
for(const key in obj){
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}
// for...of iterates over the values of an iterable (like arrays, strings, etc.)
for(const value of Object.values(obj)){  // "should be iterable"
    console.log(value);
}
for(const value of "itterable"){  // "should be iterable"
    console.log(value);
}
let x = obj["Dwayne"]
for(const value of x.toString()){  // "should be iterable"
    console.log(value);
}
for(const value of String(x)){  // "should be iterable"
     console.log(value);
}
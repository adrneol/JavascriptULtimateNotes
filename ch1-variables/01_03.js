// primitive vs non primitive
// primitive - NN SS BB U - null, number, string, symbol, boolean, bigint, undefined
// non primitive - object

let a =null   // mentions explicitelly
let b= 2
let c = "Addie"
let d = Symbol("im a symbol")
let e = true
let f = BigInt(2)
let g = undefined   // not mandatory to mention explicitelly example "let g;" itself is undefined
console.log(a,b,c,d,e,f,g)
console.log(typeof a) // null
console.log(typeof b) // number
console.log(typeof c) // string
console.log(typeof d) // symbol
console.log(typeof e) // boolean
console.log(typeof f) // bigint
console.log(typeof g) // undefined

// Non primitive datatybe - Object (key value pair)
const fruits = {
    "apple" : "red",
    "banana" : "yellow",
    "orange" : "orange"
}
console.log(fruits["apple"]) // or console.log(fruits.apple)
//JavaScript object keys are ALWAYS strings (or symbols).
// let, var, cosnt
var a = 1
console.log(a)
var a= 2
console.log(a)
// var can be redeclared and reassigned, and global scoped.

// Let
let b = 1
console.log(b)
// let b = 2 cant be redeclared i.e. "let b"
// let cant be redeclared but can be reasigned, and block scoped
b="changed"
console.log(b)
{let b = 2
    console.log(b) // block scoped
}

// { b = 3
//     console.log(b) // reasigned[]
// }
// console.log("after block:",b)  //output is 3


// cosnt
const author = "Adrneol";
console.log(author)
// const author = "Addie" cant be redeclared i.e. "const author"                                           
// author = "You"// can't be reasigned
// const writer; // must be initialized
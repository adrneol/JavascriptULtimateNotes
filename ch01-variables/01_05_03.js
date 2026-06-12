// 
const object={
    name: "Js", 
    number: 2,
    good: true
}
// object= "cant be change, error"
object["industry"]= true //inserting key-value
console.log(object)
object.good= false
console.log(object)
object.industry= false
console.log(object)
console.log(object.good)
object.check="lesse" //inserting new key-value to the current object.
console.log(object)
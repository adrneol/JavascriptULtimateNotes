let a =  document.body
console.log("first child of a is ",a.firstChild) // #text
console.log("first element child of a is ",a.firstElementChild) // nav
const ChangeBGred = () => {
    a.firstElementChild.style.backgroundColor = "red";
}
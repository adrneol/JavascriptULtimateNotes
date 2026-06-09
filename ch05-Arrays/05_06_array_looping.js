let num = [3,4,5,6,7,8,9];
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}
// forEach
num.forEach((element)=>{
    console.log(element*element);
})
console.log(num);

// manual
let num1 = [3,4,5,6,7,8,9];
const elementt = (element) => {
  console.log(element * element);
}
for (let i = 0; i < num1.length; i++) {
  let element = num1[i];
  elementt(element);
}
// https://chatgpt.com/s/t_69c2c41d61e48191bb98aa53d2ac9e3f
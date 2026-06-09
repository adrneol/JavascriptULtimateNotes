const canDrive = (age)=>{
    return age >= 18 ? true : false;
}

let runagain = true;
while(runagain){
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if(age<0){
        alert("Plz enter a valid age");
        console.error("Invalid age entered: " + age);   
        continue;
    }
    if(canDrive(age)){
        alert("You can drive");
    }
    else{
        alert("You cannot drive");
    }
    runagain = confirm("Run again?");
}
const student ={
    Adrneol: 90,
    Breneol: 80,
    Creneol: 70,
    Dreneol: 60,
    Ereneol: 50
}
// built-in method to get the keys of an object
for(let key in student){
    console.log(`Student: ${key} marks is ${student[key]}`);
}

// lets make a algo for it without using built-in method
for(i=0; i<Object.keys(student).length; i++){
 console.log(`student: Name-> ${Object.keys(student)[i]} marks is ${student[Object.keys(student)[i]]} or ${Object.values(student)[i]}`);
}

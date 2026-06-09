// function without parameters
const story =()=>{
    console.log("Once upon a time..."); 
    return "The end.";
}
 story(); // Once upon a time...
 console.log(story()); // Once upon a time... The end.

 let store = story(); // store will hold the return value of the function
 console.log(store); // The end.
let str = "Hello, World!";

for(let i = 0; ; i++) {
    if(str[i]!=undefined) {
        console.log(str[i]);
    } else {
        break;
        console.log("This will never be executed");
    }
}
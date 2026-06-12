// please give us Rs 1000

let str = "please give us Rs 1000";
let i =0;
let a="";
while(true){
    if(str[i] == Number(str[i])){
        a += str[i];
        // a = a.concat(str[i]);
    }
    else if (str[i] == undefined){
        break;
    }
    i++;
}
console.log(a.trim());
// https://chatgpt.com/s/t_69c1b8bd71b08191a3d892731fa58970
// https://chatgpt.com/s/t_69c1b8ddd1d48191bf762e7a933b3ca9
// https://chatgpt.com/s/t_69c1b902e5e88191aaed8d00a74726c6
// https://chatgpt.com/s/t_69c1b91d67d081918b8ff9e8bd82b336
let str2 = "please give us Rs 1000";
let amount = str2.match(/\d+/)[0];
console.log(amount);
let amount2 = Number.parseInt(str2.slice("please give us Rs ".length));
console.log(amount2);



// ( / regex pattern/ ) - regular expression, string pattern matching
// \d - digit character , 0-9
// + - one or more times, \d+ means one or more digit characters

// To find all numbers in the sentence, you add a g (which stands for Global search) after the second slash:

let str3 = "please give us Rs 1000 and 500";
let amounts = str3.match(/\d+/g); 
console.log(amounts);
// Result: ["1000", "500"]
// (Note: When using g, you don't use [0] at the end, because you want the whole list of numbers, not just the first one).

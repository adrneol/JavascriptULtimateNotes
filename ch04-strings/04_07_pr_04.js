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
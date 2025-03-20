const readline=require('readline-sync');
let n=parseInt(readline.question("Enter your number..."));//taking input from user.

let harmonicNum=0;
for(let i=1;i<=n;i++){
    harmonicNum+=1.0/i;
}
console.log(`Nth harmonic number : ${Math.floor(harmonicNum)}`);//Printing the nth harmonic number.

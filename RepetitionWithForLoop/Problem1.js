const readline=require('readline-sync');
let num=parseInt(readline.question("Enter your number..."));
let tableNum=Math.pow(num,2);
let limit=Math.pow(2,num);
for(let i=1;i*tableNum<limit;i++){
     console.log(tableNum*i);
}
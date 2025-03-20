
const readline=require('readline-sync');
let a=parseInt(readline.question("Enter first number : "));//Taking input from user
let b=parseInt(readline.question("Enter second number : "));
let c=parseInt(readline.question("Enter third number : "));

let val1=a + b * c;//Evaluting expressions
let val2=a % b + c;
let val3=c + a / b;
let val4=a * b + c;
let maxVal=Math.max(val1,Math.max(val2,Math.max(val3,val4)));//finding max value
let minVal=Math.min(val1,Math.min(val2,Math.min(val3,val4)));//finding min value
console.log(`Maximum Value ${maxVal}`);//printing out put on console
console.log(`Minimum value ${minVal}`);//printing out put on console
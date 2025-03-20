const readline=require('readline-sync');
//taking input from user
let num1=parseInt(readline.question("Enter first three digit number..."));
let num2=parseInt(readline.question("Enter second three digit number..."));
let num3=parseInt(readline.question("Enter third three digit number..."));
//checking for maximum number...
if(num1>num2 && num1>num3){
    console.log('maximum number : ',num1);
}else if(num2>num1 && num2>num3){
    console.log('maximum number : ',num2);
}else{
    console.log('maximum number : ',num3);
}
//checking for minimum number...
if(num1<num2 && num1<num3){
    console.log('minimum number : ',num1);
}else if(num2<num1 && num2<num3){
    console.log('minimum number : ',num2);
}else{
    console.log('minimum number : ',num3);
}
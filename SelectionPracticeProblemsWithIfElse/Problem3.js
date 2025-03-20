const readline=require('readline-sync');
//taking input from user...
let year=parseInt(readline.question('Enter year...'));

//checking leap year or not...
if(year%4==0 && year%100!=0){
    console.log("Leap Year...");
} else{
    console.log("Not Leap Year...");
}
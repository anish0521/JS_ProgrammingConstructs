const readline=require('readline-sync');
//taking input from user...
let date=parseInt(readline.question('Enter date...'));
let month=parseInt(readline.question('Enter month...'));


//checking condisions for output...
if(month<=6 && month>=3){
    if((month==6 && date>20 ) || (month==3 && date<20)){
        console.log("False...");
    } else{
        console.log('True...');
    }
} else{
    console.log('False...');
}
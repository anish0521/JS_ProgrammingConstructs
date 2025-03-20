function findDay(number){
    if(number==0){
        return "Sunday."
    }else if(number==1){
        return "Monday."
    }else if(number==2){
        return "Tuesday."
    }else if(number==3){
        return "Wednesday."
    }else if(number==4){
        return "Thursday."
    }else if(number==5){
        return "Friday."
    }else{
        return "Saturday."
    }
}
const readline=require('readline-sync');
let num=parseInt(readline.question("Enter number (0-6) : "));
console.log("Day in given number : "+findDay(num));
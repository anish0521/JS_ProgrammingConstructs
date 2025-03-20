//Function for finding the day 
function findDay(number){
    switch(number){
        case 0 : return "Sunday.";
        break;
        case 1 : return "Monday.";
        break;
        case 2 : return "Tuesday.";
        break;
        case 3 : return "Wednesday.";
        break;
        case 4 : return "Thursday.";
        break;
        case 5 : return "Friday.";
        break;
        case 6 : return "Saturday.";
        break;
        default:return "Invalid input.";
    }
}
const readline=require('readline-sync');
let num=parseInt(readline.question("Enter your day number : "));//Taking input from user.
console.log("Day on given number : "+findDay(num));//printing the output.
function numberType(number){
    switch(number){
        case 1 : return "Unit.";
        break;
        case 100 : return "Hundred.";
        break;
        case 1000 : return "Thousand.";
        break;
        case 10000 : return "Ten Thousands.";
        break;
        case 100000 : return "Lakh.";
        break;
        case 1000000 : return "Ten Lakh.";
        break;
        case 10000000 : return "Crores.";
        break;
    }
}
const readline=require('readline-sync');
let num=parseInt(readline.question("Enter the number...")); //taking input from user
console.log(numberType(num));//printing out put on console.
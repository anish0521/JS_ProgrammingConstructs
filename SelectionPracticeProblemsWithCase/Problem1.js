//Method convert number digit to word...
function digitToWord(number){
    switch(number){
        case 1 : return "One.";
                 break;
        case 2 : return "Two.";
        break;
        case 3 : return "Three.";
        break;
        case 4: return "Four.";
        break;
        case 5: return "Five.";
        break;
        case 6: return "Six.";
        break;
        case 7: return "Seven";
        break;
        case 8 : return "Eight";
        break;
        case 9 : return "Nine";
        break;
        case 0 : return "Zero";
        break;
    }
}
    const readline=require('readline-sync');
    let num=parseInt(readline.question("Enter number: "));//taking input from user.
    console.log("you Entered : "+digitToWord(num));//printing appropriate output

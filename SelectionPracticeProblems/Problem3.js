function displayRange(number){
    if(number==1){
        return "Unit";
    }else if(number==100){
        return "Hundred."
    }else if(number==1000){
        return "Thousand."
    }else if(number==10000){
        return "Ten Thousands."
    }else if(number==100000){
        return "Lakh."
    }else if(number==1000000){
        return "Ten Lakh."
    }else {
        return "Crores."
    }
}
const readline=require('readline-sync');
let num=parseInt(readline.question("Enter your number..."));
console.log(displayRange(num));
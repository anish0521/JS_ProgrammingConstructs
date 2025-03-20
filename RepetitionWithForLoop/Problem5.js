function printFactorial(number){
    let factorial=1;
    for(let i=1;i<=number;i++){
        factorial*=i;
    }
    console.log(`Factorial of given number : ${factorial}`);
}

const readline=require('readline-sync');
let n=parseInt(readline.question("Enter your number..."));//taking input from user.
printFactorial(n);//Printing the factorial of number.
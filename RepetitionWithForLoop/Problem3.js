function checkPrime(number){
    if(number<2)
        console.log("Not a Prime Number.")
    else if(number==2)
        console.log("It's a Prime Number.")
    else{
        for(let i=2;i<Math.sqrt(number);i++){
            if(number%i==0){
                console.log("Not a Prime Number.")
                return;
            }
        }
        console.log("It's a Prime Number.");
    }
}
const readline=require('readline-sync');
let n=parseInt(readline.question("Enter your number for check prime..."));//taking input from user.
checkPrime(n);//checking number, is prime or not..



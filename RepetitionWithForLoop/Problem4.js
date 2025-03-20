function printPrimeNumber(number){
    for(let i=2;i<=n;i++){
        let flag=true;
        for(let j=2;j<=Math.sqrt(i);j++){
                if(i%j==0){
                    flag=false;
                    break;
                }
        }
        if(flag || i==2){
            console.log(i);
        }
    }
}

const readline=require('readline-sync');
let n=parseInt(readline.question("Enter your number..."));//taking input from user.
printPrimeNumber(n);//Printing prime number upto n
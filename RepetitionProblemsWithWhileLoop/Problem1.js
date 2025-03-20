function printPowersOfTwo(n) {
    let power = 1;
    let i = 0;
    
    console.log(`Powers of 2 up to 2^${n} or 256:`);
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}

const readline=require('readline-sync');
let num=parseInt(readline.question("Enter the number..."));//taking input from user.
printPowersOfTwo(num);//printing the value of 2's power...

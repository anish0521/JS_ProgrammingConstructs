const readline =require('readline-sync');


function findMagicNumber(low, high) {
    if (low > high) {
        console.log("Something went wrong!");
        return;
    }
    
    let mid = Math.floor((low + high) / 2);
    
    let answer=readline.question(`Is your number ${mid}? (yes/no): `);
    if(answer.toLowerCase()==='yes'){
        console.log(`Your magic number is : ${mid}`);
    }
    else{
        let result=readline.question(`Is your number is greater than suggested number..`);
        if(result.toLowerCase()=='yes'){
            findMagicNumber(mid+1,high);
        }else{
            findMagicNumber(low,mid-1);
        }
    }
}

console.log("Think of a number between 1 and 100.");

findMagicNumber(1, 100);

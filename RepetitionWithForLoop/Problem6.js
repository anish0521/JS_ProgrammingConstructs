function primeFactors(N) {
    let factors = [];
    
    // Remove factors of 2
    while (N % 2 === 0) {
        factors.push(2);
        N /= 2;
    }
    
    // Check odd numbers from 3 onwards, up to sqrt(N)
    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N /= i;
        }
    }
    
    // If N is still greater than 2, it is prime
    if (N > 2) {
        factors.push(N);
    }
    
    return factors;
}

const readline=require('readline-sync');
let N=parseInt(readline.question("Enter your number..."));//taking input from user.
console.log(`Prime factors of ${N}:`, primeFactors(N));//Printing the Prime factor of given number.

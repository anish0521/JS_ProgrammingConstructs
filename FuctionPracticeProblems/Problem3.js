const readline = require('readline-sync');

//checking the number is prime or not...
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// get the palindrome of number...
function getPalindrome(num) {
    let str = num.toString();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return (reversedStr);
}


    let num=readline.question("Enter a number: "); // taking input form user.
        num = parseInt(num);
        if (isNaN(num)) {
            console.log("Invalid input! Please enter a valid number.");
        }
        else{

            if(isPrime(num)) {
               console.log(num + " is a prime number.");
            }else{
                console.log(num, "not a prime number.");
            }
            let palindrome = getPalindrome(num);
            console.log("Palindrome of " + num + " is " + palindrome);
            if (isPrime(palindrome)) {
                console.log("The palindrome " + palindrome + " is also a prime number.");
            }
             else {
                console.log("The palindrome " + palindrome + " is not a prime number.");
            }
        }

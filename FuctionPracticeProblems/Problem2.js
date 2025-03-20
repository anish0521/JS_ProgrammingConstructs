function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

//function for compare two number is palindrome or not...
function checkPalindromes(num1, num2) {
    console.log(`${num1} is ${isPalindrome(num1) ? '' : 'not '}a palindrome.`);
    console.log(`${num2} is ${isPalindrome(num2) ? '' : 'not '}a palindrome.`);
}


const num1 = 121; 
const num2 = 123; 
checkPalindromes(num1, num2);//checking for both numbers
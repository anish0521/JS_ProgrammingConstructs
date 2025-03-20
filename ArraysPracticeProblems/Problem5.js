function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) { // Only two-digit numbers
        let tens = Math.floor(i / 10); // Extract tens place
        let ones = i % 10; // Extract ones place

        if (tens === ones) {
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Find and display repeated digit numbers
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);

function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

function findSecondLargestAndSmallestSorted(arr) {
    let sortedArray = [...arr].sort((a, b) => a - b);
    return {
        secondSmallest: sortedArray[1],
        secondLargest: sortedArray[sortedArray.length - 2]
    };
}

// Generate 10 random 3-digit numbers
let numbersArray = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbersArray);

// Find 2nd largest and 2nd smallest without sorting
let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbersArray);
console.log("Without Sorting - Second Largest:", secondLargest);
console.log("Without Sorting - Second Smallest:", secondSmallest);

// Sort the array and find 2nd largest & 2nd smallest
let sortedResults = findSecondLargestAndSmallestSorted(numbersArray);
console.log("Sorted Numbers:", numbersArray.sort((a, b) => a - b));
console.log("With Sorting - Second Largest:", sortedResults.secondLargest);
console.log("With Sorting - Second Smallest:", sortedResults.secondSmallest);

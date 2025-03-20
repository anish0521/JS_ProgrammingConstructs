function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

function rollDiceUntilMaxCount(targetCount) {
    let diceResults = new Map(); // Using Map to store counts

    // Initialize map with numbers 1 to 6
    for (let i = 1; i <= 6; i++) {
        diceResults.set(i, 0);
    }

    let maxReached = false;

    while (!maxReached) {
        let roll = rollDie();
        diceResults.set(roll, diceResults.get(roll) + 1); // Increment count

        if (diceResults.get(roll) === targetCount) {
            maxReached = true; // Stop when any number reaches targetCount
        }
    }

    return diceResults;
}

function findMinMax(diceResults) {
    let minKey = null, maxKey = null;
    let minValue = Infinity, maxValue = -Infinity;

    for (let [key, value] of diceResults) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
        if (value < minValue) {
            minValue = value;
            minKey = key;
        }
    }

    return { maxNumber: maxKey, minNumber: minKey };
}

// Simulate dice rolling
let diceResults = rollDiceUntilMaxCount(10);
console.log("Dice Roll Counts:", Object.fromEntries(diceResults)); // Convert Map to Object for display

// Find max and min occurring numbers
let { maxNumber, minNumber } = findMinMax(diceResults);
console.log("Number that reached maximum times:", maxNumber);
console.log("Number that appeared minimum times:", minNumber);

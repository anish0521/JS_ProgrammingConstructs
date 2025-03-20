function generateBirthMonths(count) {
    let birthMonthMap = new Map();

    // Initialize map with empty arrays for each month (1 to 12)
    for (let month = 1; month <= 12; month++) {
        birthMonthMap.set(month, []);
    }

    // Assign random birth months to 50 individuals
    for (let i = 1; i <= count; i++) {
        let randomMonth = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
        birthMonthMap.get(randomMonth).push(i); // Store individual by month
    }

    return birthMonthMap;
}

// Generate and store birth months of 50 individuals
let birthMonthData = generateBirthMonths(50);

// Print individuals grouped by birth month
console.log("Individuals grouped by birth month:");
for (let [month, individuals] of birthMonthData) {
    console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(", ") : "No birthdays"}`);
}

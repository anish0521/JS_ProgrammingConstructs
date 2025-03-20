function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return triplets;
}

// Example usage
let numbers = [-1, 0, 1, 2, -1, -4]; // Change this array to test with other numbers
let result = findTriplets(numbers);

if (result.length > 0) {
    console.log("Triplets that sum to zero:", result);
} else {
    console.log("No triplets found that sum to zero.");
}

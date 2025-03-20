function convertUnits(option, value) {
    switch (option) {
        case 1:
            return `${value} Feet = ${value * 12} Inches`;
        case 2:
            return `${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`;
        case 3:
            return `${value} Inches = ${(value / 12).toFixed(4)} Feet`;
        case 4:
            return `${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`;
        default:
            return "Invalid option selected";
    }
}

    const readline=require('readline-sync');
    //taking input from user for unit conversion type
    let option = parseInt(readline.question("Choose a conversion option:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"));
    //taking value from user for conversion
    let value = parseFloat(readline.question("Enter the value to convert:"));
    //checking the value...
    if (isNaN(value) || value < 0) {
        console.log("Please enter a valid positive number.");
        return;
    }
    
    console.log(convertUnits(option, value));

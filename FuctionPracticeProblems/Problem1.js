const readline = require('readline-sync');

function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

    let choice=readline.question("Choose conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius: ");
        switch (choice) {
            case '1':
                let degC= parseFloat(readline.question("Enter temperature in Celsius (0 degree C to 100 degree C): "));
                     
                    if (degC >= 0 && degC <= 100) {
                        console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC).toFixed(2)} degree F`);
                    } else {
                        console.log("Invalid input! Enter a value between 0 degree C and 100 degree C.");
                    }
                break;

            case '2':
                let degF = parseFloat( readline.question("Enter temperature in Fahrenheit (32 degree F to 212 degree F): "));
                    if (degF >= 32 && degF <= 212) {
                        console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF).toFixed(2)} degree C`);
                    } else {
                        console.log("Invalid input! Enter a value between 32 degree F and 212 degree F.");
                    }
                break;
            default:
                console.log("Invalid choice! Please enter 1 or 2.");
        }

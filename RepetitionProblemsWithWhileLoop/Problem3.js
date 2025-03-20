function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
    const target = 11;

    while (headsCount < target && tailsCount < target) {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";
        console.log(`Coin Flip Result: ${result}`);
        
        if (result === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
        
        console.log(`Score ---->>>>>>>>>   Heads: ${headsCount},      Tails: ${tailsCount}`);
    }
    
    console.log(`${headsCount === target ? "Heads" : "Tails"} wins the game!`);
}

// Start the coin flip game
flipCoinGame();
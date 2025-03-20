function gamblerGame() {
    let money = 100;  //initail money 
    const goal = 200; //target money
    let bets = 0;     //number of total bets
    let wins = 0;     //number of wins

    while (money > 0 && money < goal) {
        bets++;
        //Using Math.random for random win loose
        if (Math.random() < 0.5) {
            money++;
            wins++;
        } else {
            money--;
        }
    }
    
    console.log(money === goal ? "Gambler reached the goal of Rs 200!" : "Gambler went broke!");
    console.log(`Total Bets: ${bets}, Total Wins: ${wins}`);
}

// Start the gambler game
gamblerGame();

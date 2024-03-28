let playGame = function() {
    let misteryWord = prompt("Choose the mistery word").toUpperCase().split('');
    let display = "_".repeat(misteryWord.length).split('');
    let numberOfTry = 0;
    
    while (misteryWord.join("") !== display.join("")) {
        
        let guess = prompt("choose a letter").toUpperCase();
        
        for (let i = 0; i < misteryWord.length; i++) {
            if (misteryWord[i] === guess ) {
                display.splice(i, 1, guess);
            }
        }    
        console.log(display.join(""));
        numberOfTry++;
    }    
    console.log("You won you find " + display.join("") + " within " + numberOfTry + " Try")
};

let playGameButton = document.querySelector('#playGame').addEventListener('click', playGame);
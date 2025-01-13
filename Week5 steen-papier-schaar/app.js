// Score bijhouden
let playerScore = 0;
let computerScore = 0;

// DOM elementen
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const choices = document.querySelectorAll('.choice');
const resetButton = document.getElementById('reset');

// Computer keuze genereren
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Winnaar bepalen
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
}

// Keuze vertalen naar Nederlands
function translateChoice(choice) {
    const translations = {
        'rock': 'Steen',
        'paper': 'Papier',
        'scissors': 'Schaar'
    };
    return translations[choice];
}

// Spel spelen
function play(event) {
    const playerChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    
    // Resultaat weergeven
    let resultMessage = `Jij koos ${translateChoice(playerChoice)}, computer koos ${translateChoice(computerChoice)}. `;
    
    if (winner === 'draw') {
        resultMessage += "Het is gelijkspel!";
    } else if (winner === 'player') {
        playerScore++;
        resultMessage += "Jij wint!";
    } else {
        computerScore++;
        resultMessage += "Computer wint!";
    }
    
    // Score updaten
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultDiv.textContent = resultMessage;
}

// Spel resetten
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    resultDiv.textContent = 'Kies een optie om te beginnen!';
}

// Event listeners toevoegen
choices.forEach(choice => choice.addEventListener('click', play));
resetButton.addEventListener('click', resetGame);
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const colorBox = document.getElementById('color-box');
    const result = document.getElementById('result');
    
    let gameState = 'ready';
    let startTime;
    let timeoutId;

    function showElement(element) {
        element.classList.remove('hidden');
    }

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function startGame() {
        gameState = 'waiting';
        hideElement(startButton);
        showElement(colorBox);
        colorBox.classList.add('red');
        colorBox.classList.remove('green');
        result.textContent = '';

        // Random wachttijd tussen 1-10 seconden
        const waitTime = Math.floor(Math.random() * 9000) + 1000;
        
        timeoutId = setTimeout(() => {
            gameState = 'green';
            colorBox.classList.remove('red');
            colorBox.classList.add('green');
            startTime = Date.now();
        }, waitTime);
    }

    function handleClick() {
        if (gameState === 'waiting') {
            // Te vroeg geklikt
            clearTimeout(timeoutId);
            gameState = 'ready';
            result.textContent = 'Te vroeg geklikt!';
            hideElement(colorBox);
            showElement(startButton);
        } else if (gameState === 'green') {
            // Correcte klik - bereken reactietijd
            const endTime = Date.now();
            const reactionTime = endTime - startTime;
            gameState = 'ready';
            result.textContent = `Reactietijd: ${reactionTime} ms`;
            hideElement(colorBox);
            showElement(startButton);
        }
    }

    startButton.addEventListener('click', startGame);
    colorBox.addEventListener('click', handleClick);
});
// script.js
function generateTable() {
    // Elementen ophalen
    const number = parseInt(document.getElementById('numberInput').value);
    const outputDiv = document.getElementById('tableOutput');
    
    // Input validatie
    if (isNaN(number)) {
        outputDiv.innerHTML = '<div class="error-message">Voer een geldig getal in.</div>';
        return;
    }

    if (number < 1 || number > 1000) {
        outputDiv.innerHTML = '<div class="error-message">Voer een getal tussen 1 en 1000 in.</div>';
        return;
    }

    // Tafel genereren
    let tableHTML = '';
    
    // Animatie effect voorbereiden
    outputDiv.style.opacity = '0';
    
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        tableHTML += `
            <div class="multiplication-row">
                ${number} × ${i} = ${result}
            </div>`;
    }
    
    // Resultaat tonen met fade-in effect
    outputDiv.innerHTML = tableHTML;
    fadeIn(outputDiv);
}

// Fade-in animatie functie
function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;

    const timer = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.1;
    }, 50);
}

// Event listener voor Enter toets
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});

// Automatisch focussen op input veld bij laden pagina
window.onload = function() {
    document.getElementById('numberInput').focus();
};
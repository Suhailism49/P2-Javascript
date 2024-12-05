const div = document.getElementById('bewegendDiv');
let xPositie = 0;
let snelheid = 5;
const kleuren = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow', 'cyan'];
let huidigeKleurIndex = 0;

function willekeurigeKleur() {
    huidigeKleurIndex = (huidigeKleurIndex + 1) % kleuren.length;
    div.style.backgroundColor = kleuren[huidigeKleurIndex];
}

div.addEventListener('click', willekeurigeKleur);

function updatePositie() {
    xPositie += snelheid;

    // Als de div de rechterrand van het scherm bereikt, keer de richting om
    if (xPositie + div.offsetWidth > window.innerWidth) {
        snelheid = -5;
    }
    
    // Als de div de linkerrand van het scherm bereikt, keer de richting weer om
    if (xPositie < 0) {
        snelheid = 5;
    }

    div.style.left = xPositie + 'px';
    requestAnimationFrame(updatePositie);
}

// Start de animatie
updatePositie();
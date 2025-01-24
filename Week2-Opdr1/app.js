const div = document.getElementById('movingDiv');
let position = 0;

function moveDiv() {
    position += 5;
    div.style.left = `${position}px`;

    if (position < window.innerWidth) {
        requestAnimationFrame(moveDiv);
    }
}

moveDiv();
const container = document.getElementById('textContainer');
const repeatText = 'Programmeren is geweldig en uitdagend!';

for (let i = 0; i < 100; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = repeatText;
    container.appendChild(paragraph);
}
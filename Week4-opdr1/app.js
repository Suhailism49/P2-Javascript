document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('multiplication-table');
    
    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('div');
        row.className = 'multiplication-row';
        const result = i * 10;
        row.textContent = `${i} x 10 = ${result}`;
        tableContainer.appendChild(row);
    }
});
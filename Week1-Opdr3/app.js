// Selecteer het formulier
const form = document.getElementById('productForm');

// Voeg een event listener toe aan het formulier
form.addEventListener('submit', function(event) {
    // Voorkom dat het formulier standaard wordt verzonden
    event.preventDefault();
    
    // Haal de waarde op uit het invoerveld
    const productInput = document.getElementById('productInput');
    const productWaarde = productInput.value;
    
    // Toon de ingevoerde waarde in de console
    console.log('Ingevoerd product:', productWaarde);
    
    // Optioneel: leeg het invoerveld na het toevoegen
    productInput.value = '';
});
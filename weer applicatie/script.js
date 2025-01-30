// API configuratie
const API_KEY = '2ab628e0c364541fa674edf13ee8bb0a'; // Vervang dit met je eigen OpenWeatherMap API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elementen
const locationInput = document.getElementById('location-input');
const searchButton = document.getElementById('search-button');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const sunriseElement = document.getElementById('sunrise');
const sunsetElement = document.getElementById('sunset');
const weatherIcon = document.getElementById('weather-icon');

// Event listeners
searchButton.addEventListener('click', getWeather);
locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather();
    }
});

// Load laatste zoekopdracht bij opstarten
document.addEventListener('DOMContentLoaded', () => {
    const lastLocation = localStorage.getItem('lastLocation');
    if (lastLocation) {
        locationInput.value = lastLocation;
        getWeather();
    }
});

// Hoofdfunctie voor het ophalen van het weer
async function getWeather() {
    const location = locationInput.value.trim();
    
    if (!location) {
        showError('Voer een locatie in');
        return;
    }

    try {
        showError(''); // Reset error message
        const response = await fetch(
            `${API_URL}?q=${location}&appid=${API_KEY}&units=metric&lang=nl`
        );

        if (!response.ok) {
            throw new Error('Locatie niet gevonden');
        }

        const data = await response.json();
        displayWeatherData(data);
        localStorage.setItem('lastLocation', location);
        
    } catch (error) {
        showError(error.message);
        weatherInfo.style.display = 'none';
    }
}

// Functie voor het weergeven van de weergegevens
function displayWeatherData(data) {
    weatherInfo.style.display = 'block';
    
    // Basis weergegevens
    temperatureElement.textContent = Math.round(data.main.temp);
    descriptionElement.textContent = data.weather[0].description;
    humidityElement.textContent = data.main.humidity;
    windSpeedElement.textContent = Math.round(data.wind.speed * 3.6); // Conversie van m/s naar km/u

    // Zonsopgang en zonsondergang
    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);
    sunriseElement.textContent = formatTime(sunrise);
    sunsetElement.textContent = formatTime(sunset);

    // Weer icoon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
}

// Helper functie voor tijd formatting
function formatTime(date) {
    return date.toLocaleTimeString('nl-NL', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Functie voor het tonen van foutmeldingen
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = message ? 'block' : 'none';
}
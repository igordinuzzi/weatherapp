let isCelsius = true; // Default to Celsius

// Add an event listener to the toggle unit button
document.getElementById('toggleUnitButton').addEventListener('click', toggleTemperatureUnit);

function toggleTemperatureUnit() {
    isCelsius = !isCelsius; // Toggle between Celsius and Fahrenheit

    // Update the temperature unit display
    const tempDisplay = document.getElementById('temp');
    if (isCelsius) {
        tempDisplay.textContent = convertToCelsius(parseFloat(tempDisplay.textContent)) + "°C";
    } else {
        tempDisplay.textContent = convertToFahrenheit(parseFloat(tempDisplay.textContent)) + "°F";
    }

    // Update the temperature unit text separately
    document.getElementById('tempUnit').textContent = isCelsius ? '°C' : '°F';
}

function convertToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}

function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

function fetchWeather(city) {
    const apiKey = '685af3d8873097c17b3f19e582507246'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        updateWeatherData(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function showPosition(position) {
    const apiKey = '685af3d8873097c17b3f19e582507246'; // Replace with your OpenWeatherMap API key
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        updateWeatherData(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function showError(error) {
    console.error("Error occurred during geolocation: ", error.message);
}

function updateWeatherData(data) {
    const tempDisplay = document.getElementById('temp');
    if (isCelsius) {
        tempDisplay.textContent = data.main.temp + "°C";
    } else {
        tempDisplay.textContent = convertToFahrenheit(data.main.temp) + "°F";
    }

    document.getElementById('city').textContent = data.name;
    document.getElementById('weatherDesc').textContent = data.weather[0].main;

    const weatherImage = document.getElementById('weatherImage');
    const weatherCondition = data.weather[0].main.toLowerCase();

    switch(weatherCondition) {
        case 'clear':
            weatherImage.src = './img/sunny.png';
            break;
        case 'clouds':
            weatherImage.src = './img/cloudy.png';
            break;
        case 'rain':
            weatherImage.src = './img/rain.png';
            break;
        case 'fog':
            weatherImage.src = './img/cloudy.png';
            break;
        default:
            weatherImage.src = './img/weather.png';
            break;
    }

    document.getElementById('cityInput').value = '';
}

function validateAndFetchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const inputError = document.getElementById('inputError');

    if (/\d/.test(cityInput)) {
        inputError.textContent = 'Please enter a valid city name (numbers are not allowed).';
    } else {
        inputError.textContent = '';
        fetchWeather(cityInput);
    }
}

document.addEventListener('DOMContentLoaded', getLocation);

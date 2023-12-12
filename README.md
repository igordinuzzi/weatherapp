# README for Today's Weather Wonderland Web Application

## Overview
Today's Weather Wonderland is a web application that displays real-time weather information for any city. It offers features like toggling between dark and light themes, and switching temperature units between Celsius and Fahrenheit. The app uses the OpenWeatherMap API for fetching weather data.

## Features
- **Theme Toggle**: Users can switch between a light and dark theme.
- **Temperature Unit Toggle**: Users can toggle the temperature display between Celsius and Fahrenheit.
- **City Search**: Enter a city name to fetch and display its current weather conditions.
- **Geolocation Support**: Automatically fetches weather data based on the user's current location.

The JavaScript code for the "Today's Weather Wonderland" web application primarily consists of two files: `themeToggle.js` and `weatherLoader.js`. Here's a detailed breakdown of each:

### themeToggle.js
This script manages the theme toggle feature, allowing users to switch between dark and light modes.

- **DOMContentLoaded Event Listener**: The script starts by adding an event listener for the 'DOMContentLoaded' event. This ensures that the JavaScript code runs only after the entire HTML document has been fully loaded.
  
- **Theme Toggle Logic**:
  - The script checks for a user's previously saved theme preference in `localStorage`. If a preference for 'dark mode' exists, it applies the 'dark-mode' class to the body of the document.
  - It adds a click event listener to the theme toggle button (`modeToggle`). When clicked, it toggles the 'dark-mode' class on the body element.
  - The current state of the theme (dark or light) is saved in `localStorage`, allowing the preference to persist across page reloads and visits.

### weatherLoader.js
This file contains the main functionality for fetching and displaying weather data.

- **Temperature Unit Toggle**: The script maintains a variable `isCelsius` to track the current temperature unit. It provides a function `toggleTemperatureUnit` to switch between Celsius and Fahrenheit. This function is bound to a button (`toggleUnitButton`) allowing users to change the unit.

- **Temperature Conversion Functions**: `convertToCelsius` and `convertToFahrenheit` are utility functions used to convert temperatures between Celsius and Fahrenheit.

- **Geolocation Support**: The script uses the `navigator.geolocation` API to get the user's current location (latitude and longitude) and fetches the weather for that location.

- **Fetching Weather Data**: 
  - `fetchWeather` function takes a city name as input, constructs a URL with the OpenWeatherMap API, and fetches weather data.
  - `showPosition` is used as a callback for successful geolocation, fetching weather data based on the user's coordinates.
  - `showError` is used as a callback for handling errors in geolocation.

- **Updating UI with Weather Data**: `updateWeatherData` is used to update the web page with the fetched weather data. It dynamically changes text content and the source of the weather image based on the weather condition.

- **User Input Validation and Fetching**: 
  - `validateAndFetchWeather` function is triggered when the user attempts to search for a city's weather. It validates the input and calls `fetchWeather` if the input is valid.
  - It also handles displaying error messages if the input is invalid (like input containing numbers).

- **Automatic Location Fetch on Load**: Finally, the script calls `getLocation` on page load (`DOMContentLoaded`) to automatically fetch and display the weather based on the user's current location.

Overall, these JavaScript files handle the dynamic features of the web application, from switching themes to fetching and displaying weather data based on user interaction or geolocation.

## File Structure
- **HTML File (index.html)**: Contains the structure of the web application.
- **CSS Files**: Includes Bootstrap and custom stylesheets for styling the web application.
- **JavaScript Files**:
  - **themeToggle.js**: Manages the dark/light mode toggle feature.
  - **weatherLoader.js**: Contains functions for fetching weather data, converting temperature units, handling user input, and updating the UI.

## How to Use
1. **Open the Web Application**: Load the `index.html` file in a browser.
2. **Toggle Theme**: Use the "Dark/Light" button to switch themes.
3. **Search for a City**: Enter a city name and click "Search" to display its weather.
4. **Toggle Temperature Units**: Click on the temperature unit button to switch between °C and °F.

## APIs and External Libraries
- **OpenWeatherMap API**: Used for fetching real-time weather data.
- **Bootstrap**: For responsive design and styling.
- **Font Awesome**: For icons used in the UI.

## Customization
- **API Key**: Replace the OpenWeatherMap API key in the `weatherLoader.js` file with your own key.
- **Styling**: Modify the `css/styles.css` file to customize the design.

## Browser Compatibility
Tested on modern browsers like Chrome, Firefox, and Edge. Geolocation features might vary based on browser support.

## Contribution
Contributions to improve the application or add new features are welcome. Please follow standard coding practices and provide documentation for your changes.

## License
This project is open-sourced and free to use. Refer to the LICENSE file for more details.


document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const weatherDisplay = document.getElementById('weatherDisplay');
    const cityNameElem = document.getElementById('cityName');
    const temperatureElem = document.getElementById('temperature');
    const descriptionElem = document.getElementById('description');
    const humidityElem = document.getElementById('humidity');
    const windSpeedElem = document.getElementById('windSpeed');
    const errorMessageElem = document.getElementById('errorMessage');

    // IMPORTANT: Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap or another weather service.
    // You can get a free API key from https://openweathermap.org/api
    const API_KEY = 'YOUR_API_KEY'; // Placeholder API Key
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

    getWeatherBtn.addEventListener('click', fetchWeatherData);
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            fetchWeatherData();
        }
    });

    async function fetchWeatherData() {
        const city = cityInput.value.trim();
        if (!city) {
            displayError('กรุณาป้อนชื่อเมือง');
            return;
        }
		
		// Hide previous results and error message
weatherDisplay.classList.add('hidden');
errorMessageElem.classList.add('hidden');

// Simulate API call with a placeholder for demonstration
// In a real application, you would use fetch like this:
// const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=th`;
// try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         if (response.status === 404) {
//             throw new Error('ไม่พบเมืองนี้');
//         }
//         throw new Error('เกิดข้อผิดพลาดในการดึงข้อมูลสภาพอากาศ');
//     }
//     const data = await response.json();
//     displayWeather(data);
// } catch (error) {
//     displayError(error.message);
// }

// Mock API response for demonstration purposes
// Replace this with actual fetch logic when you have an API key
console.log(`Fetching weather for: ${city}`);
try {
    const mockData = await simulateApiCall(city);
    displayWeather(mockData);
} catch (error) {
    displayError(error.message);
}	
}

// Simulate an asynchronous API call
function simulateApiCall(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lowerCaseCity = city.toLowerCase();
            if (lowerCaseCity === 'bangkok' || lowerCaseCity === 'กรุงเทพ') {
                resolve({
                    name: 'Bangkok',
                    main: {
                        temp: 30.5,
                        humidity: 75
                    },
                    weather: [{
                        description: 'แผยฝน'
                    }],
                    wind: {
                        speed: 3.2
						}
				});
        } else if (lowerCaseCity === 'london' || lowerCaseCity === 'ลอนดอน') {
            resolve({
                name: 'London',
                main: {
                    temp: 18.2,
                    humidity: 88
                },
                weather: [{
                    description: 'มีเมฆมาก'
                }],
                wind: {
                    speed: 5.1
                }
            });
        } else if (lowerCaseCity === 'new york' || lowerCaseCity === 'นิวยอร์ก') {
            resolve({
                name: 'New York',
                main: {
                    temp: 25.0,
                    humidity: 60
                },
                weather: [{
                    description: 'แดดจัด'
                }],
                wind: {
                    speed: 2.5
                }
            });
        } else {
            reject(new Error('ไม่พบเมืองนี้'));
        }
    }, 1000); // Simulate network delay
});
}


function displayWeather(data) {
    cityNameElem.textContent = data.name;
    temperatureElem.textContent = `${Math.round(data.main.temp)}°C`;
    descriptionElem.textContent = data.weather[0].description;
    humidityElem.textContent = `ความชื้น: ${data.main.humidity}%`;
    windSpeedElem.textContent = `ความเร็วลม: ${data.wind.speed} m/s`;

    weatherDisplay.classList.remove('hidden');
}

function displayError(message) {
    errorMessageElem.textContent = message;
    errorMessageElem.classList.remove('hidden');
    weatherDisplay.classList.add('hidden'); // Ensure weather display is hidden
}
});

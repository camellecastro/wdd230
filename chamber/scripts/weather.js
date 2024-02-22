// // 16.515647662634983, 120.41321752924841 - naguilian
// // 16.615314257731875, 120.3221864045373 - san fernando
// //select HTML elements in the document
// const myDescription = document.querySelector('#description');
// const myTemperature = document.querySelector('#temperature');
// const myGraphic = document.querySelector('#graphic');

// const myKey = "735ca3cf4612c125247796e89000e04b"
// const myLat = "16.515647662634983"
// const myLong = "120.41321752924841"

// const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

// async function apiFetch() {
//     try {
//         const response = await fetch(myUrl);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data); //testing only
//             displayResults(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// apiFetch();

// function capitalizeFirstLetter(str) {
//     return str.replace(/\b\w/g, (char) => char.toUpperCase());
// }

// function displayResults(data) {
//     myTown.innerHTML = data.name;

//     let description = data.weather.map((event) => capitalizeFirstLetter(event.description));
//     myDescription.innerHTML = description.join(', '); // Join all weather descriptions

//     myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Format to show zero decimal points
//     const graphic = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     myGraphic.setAttribute('src', graphic);
//     myGraphic.setAttribute('alt', joinedDescriptions); // Use joined descriptions
// }


// 16.515647662634983, 120.41321752924841 - naguilian
// select HTML elements in the document
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const forecastContainer = document.querySelector('#forecastContainer');

const myKey = "735ca3cf4612c125247796e89000e04b";
const myLat = "16.515647662634983";
const myLong = "120.41321752924841";

const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

async function displayWeatherData() {
    try {
        const [currentData, forecastData] = await Promise.all([apiFetch(myUrl), apiFetch(forecastUrl)]);
        
        let description = currentData.weather.map(event => capitalizeFirstLetter(event.description));
        myDescription.innerHTML = description.join(', '); // Join all weather descriptions

        myTemperature.innerHTML = `${Math.round(currentData.main.temp)}&deg;F`; // Format to show zero decimal points
        const graphic = `//openweathermap.org/img/w/${currentData.weather[0].icon}.png`;

        myGraphic.setAttribute('src', graphic);
        myGraphic.setAttribute('alt', description.join(', ')); // Use joined descriptions

        // Display three-day forecast
        forecastContainer.innerHTML = "";
        for (let i = 0; i < 3; i++) {
            const forecast = forecastData.list[i * 8]; // Forecast data is provided in 3-hour increments, so we skip by 8 to get daily data
            const forecastDate = new Date(forecast.dt_txt);
            const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(forecastDate);
            const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(forecastDate);
            
            const forecastElement = document.createElement('div');
            forecastElement.innerHTML = `
                <p>${dayOfWeek} <br> ${formattedDate} <br> ${Math.round(forecast.main.temp)}&deg;F <br> ${capitalizeFirstLetter(forecast.weather[0].description)}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        }
    } catch (error) {
        console.log(error);
    }
}

// Fetch current weather data and forecast data
displayWeatherData();

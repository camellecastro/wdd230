// //select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75077347557095&lon=6.640027425790352&units=imperial&appid=735ca3cf4612c125247796e89000e04b';

// async function apiFetch() {
//     try {
//         const response = await fetch(url);
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

// function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
// }

// temp: 50.92
//weather.description -overcast clouds
//weather[0].icon - 3 characters 04d
//https://openweathermap.org/img/wn/10d@2x.png


//STRETCH CHALLENGE

//select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75077347557095&lon=6.640027425790352&units=imperial&appid=735ca3cf4612c125247796e89000e04b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Format to show zero decimal points
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let descriptions = data.weather.map((event) => capitalizeFirstLetter(event.description));
    let joinedDescriptions = descriptions.join(', '); // Join all weather descriptions

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', joinedDescriptions); // Use joined descriptions
    captionDesc.textContent = joinedDescriptions;
}

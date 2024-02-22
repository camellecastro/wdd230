//STRETCH CHALLENGE

//select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "735ca3cf4612c125247796e89000e04b"
const myLat = "553.54659"
const myLong = "-113.49020"


const myUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(myUrl);
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
    myTemperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`; // Format to show zero decimal points
    const myGraphic = `//openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let myDescription = data.weather.map((event) => capitalizeFirstLetter(event.description));
    let joinedDescriptions = descriptions.join(', '); // Join all weather descriptions

    weatherIcon.setAttribute('src', myGraphic);
    weatherIcon.setAttribute('alt', joinedDescriptions); // Use joined descriptions
    captionDesc.textContent = joinedDescriptions;
}

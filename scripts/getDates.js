const todaysDate = new Date();
const year = todaysDate.getFullYear();

document.getElementById('year').textContent = year;

const lastUpdate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastUpdate}`;

const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


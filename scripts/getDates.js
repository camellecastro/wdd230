const todaysDate = new Date();
const year = todaysDate.getFullYear();

document.getElementById('year').textContent = year;

const lastUpdate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastUpdate}`
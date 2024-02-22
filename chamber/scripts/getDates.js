const todaysDate = new Date();
const year = todaysDate.getFullYear();

document.getElementById('year').textContent = ` ${year} `;

const lastUpdate = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastUpdate}`;
    
// Function to set the current date and time
function setTimestamp() {
    let timestampField = document.getElementById('timestamp');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Adjust the format if needed

    timestampField.value = formattedDate;
}
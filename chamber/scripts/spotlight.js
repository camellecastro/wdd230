const baseURL = "https://camellecastro.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

// Function to fetch members data
async function fetchMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error("Error fetching members data:", error);
        return [];
    }
}

// Function to filter silver and gold members
function filterSilverGoldMembers(members) {
    return members.filter(member => member.membershipLevel.toLowerCase() === 'silver' || member.membershipLevel.toLowerCase() === 'gold');
}

// Function to randomly select two to three members
function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => Math.random() - 0.5);
    return shuffledMembers.slice(0, count);
}

// Function to display spotlight advertisements
async function displaySpotlightAdvertisements() {
    try {
        const membersData = await fetchMembers();
        if (membersData) {
            const silverGoldMembers = filterSilverGoldMembers(membersData);

            // Ensure there are enough members to display
            if (silverGoldMembers.length >= 2) {
                const selectedMembers = getRandomMembers(silverGoldMembers, 3);

                // Clear existing content
                const spotlightContainer = document.getElementById('spotlightContainer');
                spotlightContainer.innerHTML = "";

                // Display spotlight members
                selectedMembers.forEach(member => {
                    const spotlightElement = document.createElement('div');
                    spotlightElement.classList.add('card');
                    spotlightElement.classList.add('spotlight-members');// Add a class for styling

                    spotlightElement.innerHTML = `
                        <h3>${member.name}</h3>
                        <p>${member.additionalInfo}</p>
                        <p>${member.address}</p>
                        <p>Phone: ${member.phone}</p>
                        <p>Website: <a href="${member.website}" target="_blank">Official Website</a></p>
                        <img src="${member.image}" alt="${member.name} Image">
                    `;

                    spotlightContainer.appendChild(spotlightElement);
                });
            }
        }
    } catch (error) {
        console.error("Error displaying spotlight advertisements:", error);
    }
}

// Call the function to display spotlight advertisements
displaySpotlightAdvertisements();

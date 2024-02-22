const baseURL = "https://camellecastro.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

//async function to fetch members data
async function getMembers() {
  try {
    const response = await fetch(membersURL);
      const data = await response.json();
      console.log(data)
    // displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// document.addEventListener("DOMContentLoaded", async function () {
//     try {
//         const data = await apiFetch('data/members.json');
//         displayMembers(data.members);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }

//     function displayMembers(members) {
//         const memberContainer = document.getElementById('memberContainer');

//         members.forEach(member => {
//             const memberCard = document.createElement('div');
//             memberCard.classList.add('member-card');

//             const img = document.createElement('img');
//             img.src = `images/${member.image}`;
//             img.alt = member.name;

//             const nameHeading = document.createElement('h3');
//             nameHeading.textContent = member.name;

//             const addressParagraph = document.createElement('p');
//             addressParagraph.textContent = `Address: ${member.address}`;

//             const phoneParagraph = document.createElement('p');
//             phoneParagraph.textContent = `Phone: ${member.phone}`;

//             const websiteParagraph = document.createElement('p');
//             websiteParagraph.textContent = `Website: ${member.website}`;

//             const levelParagraph = document.createElement('p');
//             levelParagraph.textContent = `Membership Level: ${member.membershipLevel}`;

//             // Add additional information as needed

//             memberCard.appendChild(img);
//             memberCard.appendChild(nameHeading);
//             memberCard.appendChild(addressParagraph);
//             memberCard.appendChild(phoneParagraph);
//             memberCard.appendChild(websiteParagraph);
//             memberCard.appendChild(levelParagraph);

//             memberContainer.appendChild(memberCard);
//         });
//     }

//     async function apiFetch(url) {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Error fetching data: ${response.statusText}`);
//         }
//         return response.json();
//     }
// });

const baseURL = "https://camellecastro.github.io/wdd230/chamber";
const membersURL = `${baseURL}/data/members.json`;

//async function to fetch members data
async function getMembers() {
  try {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data)
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}


function displayMembers(members) {
    const cards = document.getElementById('#memberContainer');

    cards.innerHTML = "";

    members.forEach((member) => {
        //member card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a')
        let memberLevel = document.createElement('p');
        let image = document.createElement('img');
        let info = document.createElement('p');

        // name and membership level
        name.textContent = `${member.name}`;
        memberLevel.textContent = `${member.membershipLevel}`;

        // image 
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '600');
        image.setAttribute('height', '600')

        // contact info
        info.textContent = `${member.additionalInfo}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        //links
        website.href = `${member.website}`;
        website.textContent = `Official Page and Website`;
        website.target = "_blank";

        //append info
        card.appendChild(name);
        card.appendChild(memberLevel);
        card.appendChild(image);
        card.appendChild(info);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getMembers();



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

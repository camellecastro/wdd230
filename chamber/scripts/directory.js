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
    const cards = document.getElementById('memberContainer');

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
        memberLevel.textContent = `${member.membershipLevel} Member`;

        // image 
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '300')

        // contact info
        info.textContent = `${member.additionalInfo}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;

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

document.addEventListener('DOMContentLoaded', function () {
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
    const memberContainer = document.getElementById('memberContainer');

    // Function to display grid view
    function displayGridView() {
        memberContainer.classList.remove('list');
        memberContainer.classList.add('grid');
    }

    // Function to display list view
    function displayListView() {
        memberContainer.classList.remove('grid');
        memberContainer.classList.add('list');
    }

    // Set default view (grid)
    displayGridView();

    // Add click event listener for grid button
    gridButton.addEventListener('click', function () {
        displayGridView();
    });

    // Add click event listener for list button
    listButton.addEventListener('click', function () {
        displayListView();
    });
});


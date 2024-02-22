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
        memberLevel.textContent = `${member.membershipLevel}`;

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

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

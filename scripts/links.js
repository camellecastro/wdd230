// links.js

// Define the base URL for the repository
const baseURL = "https://camellecastro.github.io/wdd230";

// Define the URL for the links.json data file
const linksURL = `${baseURL}/data/links.json`;

// Asynchronous function to fetch links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to display links based on the data
function displayLinks(weeks) {
  const linkContainer = document.getElementById("link-container");

  // Clear any existing content in the link container
  linkContainer.innerHTML = "";

  // Loop through each week in the data
  weeks.forEach((weekData) => {
    const weekElement = document.createElement("li");

    // Set the week number as the text content of the list item
    weekElement.textContent = `${weekData.week}: `;

    // Loop through each link in the week and create anchor elements
    weekData.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.href = `${baseURL}/${link.url}`;
      linkElement.textContent = link.title;
      linkElement.target = "_blank"; // Open links in a new tab
      weekElement.appendChild(linkElement);

      // Add a separator between links
      const separator = document.createElement("span");
      separator.textContent = " | ";
      weekElement.appendChild(separator);
    });

    // Append the week element to the link container
    linkContainer.appendChild(weekElement);
  });
}

// Call the getLinks function to initiate the process
getLinks();

const baseURL = "https://camellecastro.github.io/wdd230/";
const linksURL = "https://camellecastro.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // displayLinks(data);
    console.log(data);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

    });
}
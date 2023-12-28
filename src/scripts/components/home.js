import wineImageJPG from "Images/wine.jpg";
import "Styles/home.css"

const displayHome = function() {
    const contentContainer = document.querySelector("#content-container");
    contentContainer.textContent = "";
    contentContainer.className = "home"

    const title = document.createElement("h1");
    title.textContent = "Really Cool Wine Bar";
    contentContainer.appendChild(title);

    const wineImage = document.createElement("img");
    wineImage.src = wineImageJPG;
    wineImage.id = "header-image";
    contentContainer.appendChild(wineImage);

    const description = document.createElement("p");
    description.textContent = "Wow this is a great place to eat food and drink beverages.";
    contentContainer.appendChild(description);

};

export default displayHome;
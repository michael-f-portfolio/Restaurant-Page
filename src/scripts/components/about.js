import aboutUsText from "Database/aboutus.txt";
import "Styles/about.css";

const displayAbout = function() {
    const contentContainer = document.querySelector("#content-container");
    contentContainer.textContent = "";
    contentContainer.className = "about";

    const aboutUsTitle = document.createElement("h1");
    aboutUsTitle.textContent = "About Us";
    aboutUsTitle.className = "aboutUsTitle";
    contentContainer.appendChild(aboutUsTitle);

    const aboutUsDescription = document.createElement("div");
    aboutUsDescription.className = "aboutUsDescription";
    aboutUsDescription.innerHTML = aboutUsText;
    contentContainer.appendChild(aboutUsDescription);
}

export default displayAbout;
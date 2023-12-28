import "Styles/footer.css";
import githubLogoPNG from "Images/github-mark.png";

const createFooter = function() {
    const footer = document.createElement("footer");

    const sourceLink = document.createElement("a");
    sourceLink.target = "_blank";
    sourceLink.href = "https://github.com/michael-f-portfolio";
    sourceLink.textContent = "Copyright © 2023 Michael F.";

    const githubLogo = document.createElement("img");
    githubLogo.src = githubLogoPNG;

    sourceLink.appendChild(githubLogo);

    footer.appendChild(sourceLink);

    return footer;
};

export default createFooter;
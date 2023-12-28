import createNav from "Components/navigation.js";
import "Styles/header.css";

const createHeader = function() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");
    headerTitle.id = "header-title";
    headerTitle.textContent = "Wino Bario";
    header.appendChild(headerTitle);
    header.appendChild(createNav());
    return header;
}

export default createHeader;
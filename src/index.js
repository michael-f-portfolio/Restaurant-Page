import "Styles/index.css";
import "Styles/globals.css"
import createHeader from "Components/header.js";
import createFooter from "Components/footer.js";
import onLoad from "Functions/onLoad.js";

const content = document.querySelector("#content");

content.appendChild(createHeader());

const contentContainer = document.createElement("div");
contentContainer.id = "content-container";

content.appendChild(contentContainer);
content.appendChild(createFooter());

onLoad();
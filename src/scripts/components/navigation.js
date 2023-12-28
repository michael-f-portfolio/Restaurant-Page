import displayHome from "Components/home.js";
import displayMenu from "Components/menu.js";
import displayAbout from "Components/about.js";
import "Styles/navigation.css";

const createNav = function() {
    const navigation = document.createElement("div");
    navigation.id = "navigation";

    const homeNav = document.createElement("button");
    homeNav.id = "home-navigation";
    homeNav.textContent = "Home";
    homeNav.addEventListener("click", () => {
        displayHome();
    });
    navigation.appendChild(homeNav);

    const menuNav = document.createElement("button");
    menuNav.id = "menu-navigation";
    menuNav.textContent = "Menu";
    menuNav.addEventListener("click", () => {
        displayMenu();
    });
    navigation.appendChild(menuNav);

    const aboutNav = document.createElement("button");
    aboutNav.id = "about-navigation";
    aboutNav.textContent = "About Us";
    aboutNav.addEventListener("click", () => {
        displayAbout();
    });
    navigation.appendChild(aboutNav);

    return navigation;
}

export default createNav;
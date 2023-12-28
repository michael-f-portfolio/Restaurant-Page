import "Styles/menu.css";
import menuItems from "Functions/menuItems.js";

function createMenuItem(item) {
    const menuItem = document.createElement("div");
    menuItem.className = "item";

    menuItem.appendChild(createMenuItemImage(item.image));

    const menuItemDescriptionContainer = document.createElement("div");
    menuItemDescriptionContainer.className = "itemDescription";

    menuItemDescriptionContainer.appendChild(createMenuItemType(item.type));
    menuItemDescriptionContainer.appendChild(createMenuItemYear(item.year));
    menuItemDescriptionContainer.appendChild(createMenuItemCountry(item.country));
    menuItemDescriptionContainer.appendChild(createMenuItemPrice(item.price));
    menuItem.appendChild(menuItemDescriptionContainer);
    return menuItem;
}

function createMenuItemImage(image) {
    const menuItemImageContainer = document.createElement("div");
    menuItemImageContainer.className = "itemPicture";
    const menuItemImage = document.createElement("img");
    menuItemImage.src = image;
    menuItemImageContainer.appendChild(menuItemImage);
    return menuItemImageContainer;
}

function createMenuItemType(type) {
    const menuItemType = document.createElement("div");
    menuItemType.className = "itemType";

    const menuItemTypeTitle = document.createElement("div");
    menuItemTypeTitle.className = "itemTypeTitle";
    // menuItemTypeTitle.textContent = "Type:";

    const menuItemTypeContent = document.createElement("div");
    menuItemTypeContent.className = "itemTypeContent";
    menuItemTypeContent.textContent = type;

    menuItemType.appendChild(menuItemTypeTitle);
    menuItemType.appendChild(menuItemTypeContent);

    return menuItemType;
}

function createMenuItemYear(year) {
    const menuItemYear = document.createElement("div");
    menuItemYear.className = "itemYear";

    const menuItemYearTitle = document.createElement("div");
    menuItemYearTitle.className = "itemYearTitle";
    // menuItemYearTitle.textContent = "Year:";

    const menuItemYearContent = document.createElement("div");
    menuItemYearContent.className = "itemYearContent";
    menuItemYearContent.textContent = year;

    menuItemYear.appendChild(menuItemYearTitle);
    menuItemYear.appendChild(menuItemYearContent);

    return menuItemYear;
}

function createMenuItemCountry(country) {
    const menuItemCountry = document.createElement("div");
    menuItemCountry.className = "itemCountry";

    const menuItemCountryTitle = document.createElement("div");
    menuItemCountryTitle.className = "itemCountryTitle";
    // menuItemCountryTitle.textContent = "Country:";

    const menuItemCountryContent = document.createElement("div");
    menuItemCountryContent.className = "itemCountryContent";
    menuItemCountryContent.textContent = country;

    menuItemCountry.appendChild(menuItemCountryTitle);
    menuItemCountry.appendChild(menuItemCountryContent);

    return menuItemCountry;
}

function createMenuItemPrice(price) {
    const menuItemPrice = document.createElement("div");
    menuItemPrice.className = "itemPrice";

    const menuItemPriceTitle = document.createElement("div");
    menuItemPriceTitle.className = "itemPriceTitle";
    menuItemPriceTitle.textContent = "$";

    const menuItemPriceContent = document.createElement("div");
    menuItemPriceContent.className = "itemPriceContent";
    menuItemPriceContent.textContent = price;

    menuItemPrice.appendChild(menuItemPriceTitle);
    menuItemPrice.appendChild(menuItemPriceContent);

    return menuItemPrice;
}

const displayMenu = function() {
    const contentContainer = document.querySelector("#content-container");
    contentContainer.textContent = "";
    contentContainer.className = "menu";

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.id = "menu-items";

    menuItems.forEach(item => {
        menuItemsContainer.appendChild(createMenuItem(item));
    });

    contentContainer.appendChild(menuItemsContainer);
};

export default displayMenu;
import rieslingPNG from "Images/riesling.png";
import pinotGrisPNG from "Images/pinot-gris.png";
import sauvignonBlancPNG from "Images/sauvignon-blanc.png";
import chardonnayPNG from "Images/chardonnay.png";

const menuItems = [
    {
        type: "Riesling",
        year: "2015",
        country: "France",
        price: "20.99",
        image: rieslingPNG
    },
    {
        type: "Pinot Gris",
        year: "2022",
        country: "Spain",
        price: "26.99",
        image: pinotGrisPNG
    },
    {
        type: "Sauvignon Blanc",
        year: "2019",
        country: "France",
        price: "19.99",
        image: sauvignonBlancPNG
    },
    {
        type: "Chardonnay",
        year: "2019",
        country: "Italy",
        price: "14.99",
        image: chardonnayPNG
    },
];

export default menuItems;
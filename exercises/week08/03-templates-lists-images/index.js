const photos = [
    "images/poppies.jpg",
    "images/dogwoods.jpg",
    "images/blossom.jpg",
    "images/field3.jpg",
    "images/field4.jpg",
    "images/branch.jpg",
    "images/red.jpg",
    "images/purple2.jpg",
    "images/field1.jpg",
    "images/purple.jpg",
    "images/jar.jpg",
    "images/green.jpg",
    "images/green1.jpg",
    "images/purple1.jpg",
    "images/magnolias.jpg",
    "images/daisy1.jpg",
];

const cards = document.querySelector(".cards");

// image 1
let template = `
    <img class="card" src="${photos[0]}" />
`;
cards.insertAdjacentHTML("beforeend", template);

// image 2
template = `
    <img class="card" src="${photos[1]}" />
`;
cards.insertAdjacentHTML("beforeend", template);

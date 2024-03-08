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
let i = 0;
while (i < photos.length) {
    // add images one by one...
    let template = `<img class="card" src="${photos[i]}" />`;
    cards.insertAdjacentHTML("beforeend", template);
    i += 1;
}

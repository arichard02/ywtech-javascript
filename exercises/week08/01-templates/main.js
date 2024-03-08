const gallery = document.querySelector("#gallery");

function addImageCardToDOM(url, caption, name) {
  const template = `
        <section class="card">
            <img src="${url}" />
            <p>${caption}</p>
            <p>${name}</p>
        </section>`;
  gallery.innerHTML += template;
}

// draw a card for each of the following images:
addImageCardToDOM("https://picsum.photos/id/106/400/300", "Flowers", "Andrea");
addImageCardToDOM("https://picsum.photos/id/107/400/300", "Wild Grasses", "Janice");
addImageCardToDOM("https://picsum.photos/id/108/400/300", "Palm Trees", "Wanda");
addImageCardToDOM("https://picsum.photos/id/109/400/300", "Meadow at sunset", "Anita");
addImageCardToDOM("https://picsum.photos/id/110/400/300", "Field", "Christina");
addImageCardToDOM("https://picsum.photos/id/111/400/300", "Truck", "Laciesha");
addImageCardToDOM("https://picsum.photos/id/112/400/300", "Wheat", "Sarah");
addImageCardToDOM("https://picsum.photos/id/114/400/300", "Sky", "Adwaina");

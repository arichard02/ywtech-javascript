const gallery = document.querySelector("#gallery");

function addImageCardToDOM(url, caption) {
    const template = `
        <section class="card">
            <img src="${url}" />
            <p>${caption}</p>
        </section>`;
    gallery.innerHTML += template;
}

// draw a card for each of the following images:
addImageCardToDOM("https://picsum.photos/id/106/400/300", "Flowers");
// addImageCardToDOM("https://picsum.photos/id/107/400/300", "Wild Grasses");
// addImageCardToDOM("https://picsum.photos/id/108/400/300", "Palm Trees");
// addImageCardToDOM("https://picsum.photos/id/109/400/300", "Meadow at sunset");
// addImageCardToDOM("https://picsum.photos/id/110/400/300", "Field");
// addImageCardToDOM("https://picsum.photos/id/111/400/300", "Truck");
// addImageCardToDOM("https://picsum.photos/id/112/400/300", "Wheat");
// addImageCardToDOM("https://picsum.photos/id/114/400/300", "Sky");

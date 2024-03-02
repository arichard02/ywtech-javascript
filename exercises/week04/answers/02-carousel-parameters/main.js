const img = document.querySelector("#current-image");
const caption = document.querySelector("#caption");

function showImage(fileName, caption) {
    img.src = "images/" + fileName;
    caption.innerHTML = caption;
}

// more photo ids can be found here: https://picsum.photos/images#4

const pictureIdList = [
    "https://picsum.photos/id/237/400/300",
    "https://picsum.photos/id/238/400/300",
    "https://picsum.photos/id/239/400/300",
    "https://picsum.photos/id/240/400/300",
    "https://picsum.photos/id/241/400/300",
    "https://picsum.photos/id/242/400/300",
    "https://picsum.photos/id/243/400/300",
    "https://picsum.photos/id/244/400/300",
    "https://picsum.photos/id/104/400/300",
    "https://picsum.photos/id/106/400/300",
    "https://picsum.photos/id/107/400/300",
    "https://picsum.photos/id/108/400/300",
    "https://picsum.photos/id/109/400/300",
    "https://picsum.photos/id/110/400/300",
];

let i = 0;
const pic = document.querySelector("img");
const caption = document.querySelector("p");

function showImage() {
    // right now, showImage always shows the same image.
    // Make it show different imageIDs (from the list above)
    pic.src = pictureIdList[0];
    caption.innerHTML = "Picture 1 of 14";
}

function previous() {
    // show the previous image in the list
    console.log("show previous image...");
}

function next() {
    // show the next image in the list
    console.log("show next image...");
}

showImage();

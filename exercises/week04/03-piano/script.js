// function playLowC() {
//     const audio = document.querySelector("audio");
//     audio.src = "scales/scale4/C_low.mp3";
//     audio.play();
// }

// function playD() {
//     const audio = document.querySelector("audio");
//     audio.src = "scales/scale4/D.mp3";
//     audio.play();
// }

// function playE() {
//     const audio = document.querySelector("audio");
//     audio.src = "scales/scale4/E.mp3";
//     audio.play();
// }

function playNote(note) {
    const folder = document.querySelector("#folder").value;
    const audio = document.querySelector("audio");
    audio.src = "scales/" + folder + "/" + note + ".mp3";
    audio.play();
} 

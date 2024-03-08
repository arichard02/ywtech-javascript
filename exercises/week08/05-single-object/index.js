//The data:
const person = {
    name: "Jane",
    pic: "images/patrick.png",
    score: 300,
};

// can you get the template to take information from the person object?
const template = `
    <div class="card">
        <img src="images/patrick.png">
        <p>Jane's high score is: 300</p>
    </div>
    `;
document.querySelector("main").insertAdjacentHTML("beforeend", template);

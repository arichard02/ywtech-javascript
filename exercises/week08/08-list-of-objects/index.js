const people = [
    { name: "Jane", pic: "images/patrick.png", score: 300 },
    { name: "Brenda", pic: "images/spongebob.png", score: 10 },
    { name: "Wanda", pic: "images/spongebob.png", score: 60 },
    { name: "Maria", pic: "images/patrick.png", score: 80 },
    { name: "Jasper", pic: "images/spongebob.png", score: 600 },
    { name: "Malik", pic: "images/patrick.png", score: 40 },
];

// the code below shows a single game player that is hard coded
// 1. can you get it to read from the list?
// 2. can you get it to add a card for all of the players by
//    reading from the list?

let template = `
    <div class="card">
        <div>
            <img src="images/patrick.png">
            <p>Jane scored 300 points</p>
        </div>
    </div>
`;
document.querySelector(".players").innerHTML = template;

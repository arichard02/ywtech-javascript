const names = [
    "Jane",
    "Brenda",
    "Wanda",
    "Maria",
    "Jasper",
    "John",
    "Malik",
    "Arjun",
    "Larry",
    "Curly",
    "Moe",
];

// use a while loop to output a message for each
// item in the array:
const container = document.querySelector("#output");
container.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[0]}!</p>`);
container.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[1]}!</p>`);
container.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[2]}!</p>`);
container.insertAdjacentHTML("beforeend", `<p>Welcome, ${names[3]}!</p>`);

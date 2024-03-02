// 1. variables that control the player's size, color, and position
let x = 500;
let y = 500;
let width = 300;
let color = "blue";
let shape = "circle";
let br = 20;


// 2. setup: this function only runs once when the page first loads
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    drawPlayer();
}

// 3. this function draws the player (currently a circle)
//    based on the values stored in the variables:
function drawPlayer() {
    clear();
    fill(color);
    if ( shape --- "circle")  {
        circle(x, y, width); // x position, y position, diameter
    } else {
        square(x, y, width, br, br, br, br); // x position, y position, diameter
    }
    // circle(x, y, width); // x position, y position, diameter
    drawGrid(window.innerWidth, window.innerHeight);
}

function movePlayer(ev) {
    // open the console in your browser to see what happens :)
    console.log(ev.code);
    if (ev.code ==="ArrowUp") {
        y = y - 10;  // subtract 10 from varible
        console.log("Move player up!!!!");
     } 

     else  if  (ev.code === "ArrowDown")  {
        y = y + 10;  // add 10 from varible
    }

    else if  (ev.code === "ArrowLeft")  {
        x = x - 10;
    }

    else if  (ev.code === "ArrowRight")  {
        x = x + 10;
    }

    else if (ev.code === "Space")  {
        width = width + 10;
    }

    else if (ev.code === "Escape")  {
        width = width - 10;
    }

    else if (ev.code === "keyG") {
        color = "green";
    }

    else if (ev.code === "keyR")  {
        color = "red";
    }

    else if  (ev.code === "keyP") {
        color = "purple";
    }

    else if (ev.code === "Digit1")  {
        shape = "square"
    }

    else if  (ev.code === "Digit2")  {
        shape = "Circle"
    }

    else if (ev.code === "Equal")  {
        br = br + 5;
    }

    else if (ev.code === "Minus")  {
        br = br - 5;
    }

    

    // re-draw the player
    drawPlayer();
}
// This is another way of adding an event listener in JavaScript:
document.addEventListener("keydown", movePlayer);
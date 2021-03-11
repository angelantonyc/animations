// document.getElementById("text").innerText = "Lets ";

let ol = 0;
let scale = 1;
let isPlaying = false;
let el = document.getElementById("circle")
// let circleInterval = setInterval(circleAnimation, 50);
let circleInterval;
function circleAnimation(time) {
    ol++;
    scale++;
    if (ol > 300) {
        ol = 0;
        scale = 1;
    }
    el.style.left = ol + "px";
    el.style.width = scale + "px";
    el.style.height = scale + "px";
    el.style.borderRadius = scale * 100 + "px";
    circleInterval = requestAnimationFrame(circleAnimation);
    // if (time < 1000) {
    //     circleInterval = requestAnimationFrame(circleAnimation);
    //     document.getElementById("circle").style.backgroundColor = "dimgrey";
    //     document.getElementById("circle").style.width = ol + "px";
    // }
    //  else if (time >= 1000 && time < 2000) {
    //     circleInterval = requestAnimationFrame(circleAnimation);
    //     document.getElementById("circle").style.backgroundColor = "dimgrey";
    //     document.getElementById("circle").style.width = ol + "px";
    // }
    // else if (time >= 2000 && time < 3000) {
    //     circleInterval = requestAnimationFrame(circleAnimation);
    //     document.getElementById("circle").style.backgroundColor = "aliceblue";
    //     document.getElementById("circle").style.width = ol + "px";
    //     document.getElementById("circle").style.height = ol + "px";
    // } 
    // else {
    //     document.getElementById("circle").style.backgroundColor = "dimgrey";
    //     // document.getElementById("circle").style.height = "20px";
    //     cancelAnimationFrame(circleInterval);
    // }
}

function mouseClicked() {
    if (isPlaying) {
        isPlaying = false; 
        el.style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval);
    } else {
        console.log(ol);
        isPlaying = true;
        el.style.backgroundColor = "darkblue";
       
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}
el.addEventListener("click", mouseClicked);
el.style.backgroundColor = "white";

let canvas = document.getElementById("animated-canvas");
let context = canvas.getContext('2d');
let canvasInterval = requestAnimationFrame(canvasAnimation);
let circleXpos = 60;
let velocity = 1;
let acceleration = 0.8;
let posY = canvas.height / 2;

function makeRandom(n) {
    return Math.floor(Math.random() * Math.floor(n));
}


function canvasAnimation() {
    circleXpos++;
    drawCircle(circleXpos, posY, 25);  // xposition, yposition, radius
    canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, r) {
    // clearCanvas();
    context.globalCompositeOperation = "difference";
    context.fillStyle = "white";
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI);  // (x position, y position:canvas.height/2(y position will be at centre of canvas), radius, starting angle, ending angle)
    context.fill();
    velocity += acceleration;
    circleXpos += velocity;
    if (circleXpos > canvas.width) {
        // circleXpos = 0;
        // velocity = 1;
        circleXpos = makeRandom(canvas.width);
        velocity = makeRandom(3);
        posY = makeRandom(canvas.height);
    }
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height); //x position, y position, width, height
}
drawCircle();
    
    
// let rotatingSquare = document.getElementById("web-animation");
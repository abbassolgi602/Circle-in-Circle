const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


function generateRandom(min, max) {
    return Math.random() * (max - min) + min;
}
var ball = { x: canvas.offsetWidth / 2, y: canvas.offsetHeight / 2, moveX: generateRandom(-1, +1), moveY: generateRandom(-1, +1) }

var speed = 3;

function moveGame() {
    // Clear Canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Create Big Circle
    ctx.beginPath();
    ctx.arc(canvas.offsetWidth / 2, canvas.offsetHeight / 2, 200, 0, 360);
    ctx.stroke();

    // Update Ball
    ball.x += ball.moveX * speed;
    ball.y += ball.moveY * speed;

    // Moving Ball
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 10, 0, 360);
    ctx.stroke();


    // touche
    var disX = ball.x - canvas.offsetWidth / 2
    var disY = ball.y - canvas.offsetHeight / 2
    var disMain = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2), 2);

    if (disMain - 200 + 10 >= 0) {
        // setTimeout(theMoveGame);
        alert()
        console.log(disMain - 200 + 10)
    }

}

var theMoveGame = setInterval(() => {
    moveGame();
}, 10)
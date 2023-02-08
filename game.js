const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

const gameContainer = document.getElementById('game-container');

const flappyImg = new Image();
flappyImg.src = 'assets/flappy_dunk.png';

//game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_HEIGHT = 50;
const PIPE_GAP = 125;

//Bird variables
let birdX = 50;
let birdY = 50
let birdVelocity = 0;
let birdAcceleration = 0.1;

//Pipe variables
let pipeX = 400;
let pipeY = canvas.height - 200;

//score and heighscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highScore = 0

document.body.onkeyup = function(e){
    if (e.code == 'space'){
        birdVelocity = FLAP_SPEED;
    }
}

function increaseScore(){

}

function collisionCheck(){

}
function hideEndMenu(){
    document.getElementById('end-menu').style.display = 'none';
    gameContainer.classList.remove('backdrop-blur');
}

function showEndMenu(){
    document.getElementById('end-menu').style.display = 'block';
    gameContainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;
}

function resetGame(){

}

function endGame(){

}

function loop(){
    //reset the ctx after every loop iteration
    ctx.clearRect(0, 0, canvas.Width, canvas.height);
    //draw flappy bird
    ctx.drawImage(flappyImg, birdX, birdY)
    //draw pipes
    //ctx.fillStyle = '#333';

    birdVelocity += birdAcceleration;
    birdY += birdVelocity

    requestAnimationFrame(loop);
}

loop();
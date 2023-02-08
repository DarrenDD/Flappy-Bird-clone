const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");
// we will need the gamecontainer to make it blurry
// when we display the end menu
const gameContainer = document.getElementById('game-container');

const flappyImg = new Image();
flappyImg.src = 'assets/flappy_dunk.png';

//Game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

// Bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceleration = 0.2 ;

// Pipe variables
let pipeX = 400;
let pipeY = canvas.height - 200;

// score and highscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highScore = 0;

// we add a bool variable, so we can check when flappy passes we increase
// the value
let scored = false;

// lets us control the bird with the space key
document.body.onkeyup = function(e) {
    if (e.code == 'Space') {
        birdVelocity = FLAP_SPEED;
    }
}

function increaseScore() {}

function collisionCheck() {}
function hideEndMenu() {
  document.getElementById("end-menu").style.display = "none";
  gameContainer.classList.remove("backdrop-blur");
}

function showEndMenu() {
  document.getElementById("end-menu").style.display = "block";
  gameContainer.classList.add("backdrop-blur");
  document.getElementById("end-score").innerHTML = score;
}

function resetGame() {}

function endGame() {}

function loop() {
  //reset the ctx after every loop iteration
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //draw flappy bird
  ctx.drawImage(flappyImg, birdX, birdY);
  //draw pipes
  //ctx.fillStyle = '#333';


  birdVelocity += birdAcceleration;
  birdY += birdVelocity;

  requestAnimationFrame(loop);
}

loop();

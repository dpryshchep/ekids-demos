var count = 0;
//canvas and context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//ball position and size
var r = 20;
var x = canvas.width/2;
var y = canvas.height-r;

//ball motion steps
var dx = 5;
var dy = -5;

//paddle position and size
var paddleHeight = 20;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;

//paddle motion steps
paddleDX = 7;

//keyPress flags
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = true;
  } 
  if(e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  if(e.keyCode == 37) {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function increaseCount() {
  document.getElementById("count").innerHTML = ++count;
}

function finishGame() {
  alert("Your result: " + count);
  window.location.href = '';
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  
  //collision model
  if (y + dy > canvas.height - r ) {
    dy = -dy;

    if (Math.abs(x - paddleX) < paddleWidth + 20) {
      increaseCount();
    } else {
      finishGame();
    }
  }

  if (y + dy < r) {
    dy = -dy;
  }

  if (x + dx > canvas.width - r || x + dx < r) {
    dx = -dx;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += paddleDX;
  }
  if(leftPressed && paddleX > 0) {
    paddleX -= paddleDX;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
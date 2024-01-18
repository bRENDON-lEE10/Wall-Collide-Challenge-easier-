//Play with Player Movement

//Set up Canvas and Grapics Context

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let player = {
  x: 75,
  y: 392,
  w: 30,
  h: 30,
  // xSpeed: 0,
  // ySpeed: 0,
  speed: 3,
};
let rectangle = {
  x: 400,
  y: 300,
  w: 45,
  h: 200,
};

let ArrowRightPresssed = false;
let ArrowLeftPressed = false;
let ArrowUpPressed = false;
let ArrowDownPressed = false;
let KeyD = false;
let KeyA = false;
let KeyW = false;
let KeyS = false;
let KeyQpressed = false;

// Main progrm loop
requestAnimationFrame(draw);

function draw() {
  //Move playerBlue based on what key is pressed / held down
  if (ArrowRightPresssed) {
    player.x += player.speed;
  } else if (ArrowLeftPressed) {
    player.x += -player.speed;
  }

  if (ArrowUpPressed) {
    player.y += -player.speed;
  } else if (ArrowDownPressed) {
    player.y += player.speed;
  }

  // Check collision
  if (
    player.x + player.w > rectangle.x &&
    player.x < rectangle.x + rectangle.w &&
    player.y + player.h > rectangle.y &&
    player.y < rectangle.y + rectangle.h
  ) {
    player.x = 75;
  }

  if (KeyQpressed) {
    rectangle.x = Math.random() * 600 + 100;
    rectangle.y = Math.random() * 300 + 100;
  }

  //Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //Draw Player
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Draw rectangle
  ctx.fillStyle = "grey";
  ctx.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);

  //Request another Animation Frame
  requestAnimationFrame(draw);
}

//Key Event Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  //KeyIsPressed movement Blue
  if (!event.repeat) {
    if (event.code == "ArrowRight") {
      ArrowRightPresssed = true;
    } else if (event.code == "ArrowLeft") {
      ArrowLeftPressed = true;
    } else if (event.code == "ArrowUp") {
      ArrowUpPressed = true;
    } else if (event.code == "ArrowDown") {
      ArrowDownPressed = true;
    } else if (event.code == "KeyQ") {
      KeyQpressed = true;
    }
  }

  //check canvas boundaries
  if (player.x > 770) {
    player.x = 75;
  } else if (player.x < -20) {
    player.x = 700;
  } else if (player.y < 0) {
    player.y = 600;
  } else if (player.y > 600) {
    player.y = 0;
  }
}

function keyupHandler(event) {
  if (event.code == "ArrowRight") {
    ArrowRightPresssed = false;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = false;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = false;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = false;
  } else if (event.code == "KeyQ") {
    KeyQpressed = false;
  }
  //KeyIsPressed movement Blue

  if (event.code == "KeyD") {
    KeyD = false;
  } else if (event.code == "KeyA") {
    KeyA = false;
  } else if (event.code == "KeyW") {
    KeyW = false;
  } else if (event.code == "KeyS") {
    KeyS = false;
  } else if (event.code == "KeyQ") {
    KeyQpressed = false;
  }
}

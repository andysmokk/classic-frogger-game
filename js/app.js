// Enemies our player must avoid
var Enemy = function (x, y, movement) {
  this.x = x;
  this.y = y;
  this.movement = movement;
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  this.x += this.movement * dt;
  if (this.x > 500) {
    this.x = -95;
  }
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
let enemyOne = new Enemy(0, 62, 200);
let enemyTwo = new Enemy(0, 145, 200);
let enemyThree = new Enemy(0, 228, 200);

// Place all enemy objects in an array called allEnemies
const allEnemies = [enemyOne, enemyTwo, enemyThree];
// Place the player object in a variable called player

var Player = function (x, y) {
  this.x = x;
  this.y = y;
  this.sprite = "images/char-boy.png";
};

Player.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let player = new Player(203, 390);

Player.prototype.handleInput = function (keyPressed) {
  console.log(this.x);
  console.log(this.y);

  if (keyPressed === "up" && this.y > 0) {
    this.y -= 83;
  }
  if (keyPressed === "down" && this.y < 390) {
    this.y += 83;
  }
  if (keyPressed === "left" && this.x > 1) {
    this.x -= 101;
  }
  if (keyPressed === "right" && this.x < 405) {
    this.x += 101;
  }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

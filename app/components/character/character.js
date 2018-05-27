import * as Colors from '../../util/font_colors';
import Sprite from '../../util/sprite';

export default class Character {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.size = 45;
    this.width = this.size;
    this.height = this.size;
    this.image_url = "app/assets/sprites/char/char_up_down.png";
    // init facing down
    this.direction = "down";

    this.x = 533; // center x
    this.y = 268; // center y

    this.move = this.move.bind(this);
    this.isFacing = this.isFacing.bind(this);
    this.updateSpriteImage = this.updateSpriteImage.bind(this);
  }

  position () {
    return [this.x, this.y];
  }

  positionAhead () {
    let diff = this.diffAhead();
    return [this.x + diff[0], this.y + diff[1] ];
  }

  mapKeyToDir(key) {
    switch (key){
      case 37:
        return "left";
      case 38:
        return "up";
      case 39:
        return "right";
      case 40:
        return "down";
      default:
        return [0,0];
    }
  }

  makeAmove(key) {
    // 37, left // 38, up // 39, right // 40, down
    let dir = this.mapKeyToDir(key);
    let movement = this.isFacing(dir);

    if (movement) {
      return movement;
    } else {
      return [0, 0];
    }
  }

  isFacing(direction) {
    if (this.direction !== direction) {
      this.direction = direction;
      return false;
    } // else this.dir === dir
    return this.diffAhead();
  }

  diffAhead () {
    switch(this.direction) {
      case "left":
        return [-45, 0];
      case "up":
        return [0, -45];
      case "right":
        return [45, 0];
      case "down":
        return [0, 45];
      default:
        return [0,0];
    }
  }

  updateSpriteImage() {
    switch(this.direction) {
      case "up":
        this.image_url = "app/assets/sprites/char/char_up_down.png";
        return [45,0];
      case "down":
        this.image_url = "app/assets/sprites/char/char_up_down.png";
        return [0,0];
      case "left":
        this.image_url = "app/assets/sprites/char/char_left_right.png";
        return [0,0];
      case "right":
        this.image_url = "app/assets/sprites/char/char_left_right.png";
        return [45,0];
      default:
        this.image_url = "app/assets/sprites/char/char_up_down.png";
        return [0,0];
    }
  }

  checkWallCollision (moveToX, moveToY, walls) {
    for (let idx in walls) {
      let wallPos = walls[idx];
      if (wallPos[0] === moveToX && wallPos[1] === moveToY) {
        return false;
      }
    }
    return true;
  }

  checkPlayAreaCollision (moveToX, moveToY) { // hard coded maximum bounds
    return (moveToX > 345 && moveToX < 750 ) && (moveToY > 80 && moveToY < 485);
  }

  wontCollide(key, dx, dy, walls) {
    // returns bool

    // walls is an array/pojo:
    /*
      { 0: [353, 88],
      1: [398, 88] }
    */

    const moveToX = this.x + dx;
    const moveToY = this.y + dy;
    return (
      this.checkPlayAreaCollision(moveToX, moveToY) &&
      this.checkWallCollision(moveToX, moveToY, walls)
    );
  }

  move(key, walls) {
    const movement = this.makeAmove(key);
    const dx = movement[0];
    const dy = movement[1];

    if ( this.wontCollide(key, dx, dy, walls) ) {
      this.x += dx;
      this.y += dy;
      this.draw();
    }
  }

  draw () {
    const ctx = this.ctx;
    const sprite_data = this.updateSpriteImage();
    // updates image url, exports relevant image positioning since L-R and Up-Dw are combinded png's

    new Sprite (
      this.ctx,
      this.image_url,
      this.x, this.y,
      sprite_data[0], sprite_data[1]
    );

    // ctx.beginPath(); // simple character box
    //   ctx.fillStyle="#9cd0e5"; // pale blue dot
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

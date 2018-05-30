import * as Colors from '../../util/font_colors';
import Sprite from '../../util/sprite';
import {
  diffAhead,
  checkWallCollision,
  checkPlayAreaCollision,
  makeAmove
} from './char_util';

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

    this.sprite = this.makeSprite();

    this.move = this.move.bind(this);
    this.makeSprite = this.makeSprite.bind(this);
    this.wontCollide = this.wontCollide.bind(this);
    this.updateSpriteImage = this.updateSpriteImage.bind(this);
  }

  makeSprite () {
    return new Sprite (
      this.ctx,
      this.image_url,
      this.x, this.y,
      0, 0
    );
  }

  position () {
    return [this.x, this.y];
  }

  positionAhead () {
    let diff = diffAhead(this.direction);
    return [this.x + diff[0], this.y + diff[1] ];
  }

  updateSpriteImage() {
    const up_down = "app/assets/sprites/char/char_up_down.png";
    const left_right = "app/assets/sprites/char/char_left_right.png";
    switch(this.direction) {
      case "up":
        this.image_url = up_down;
        return [45,0];
      case "down":
        this.image_url = up_down;
        return [0,0];
      case "left":
        this.image_url = left_right;
        return [0,0];
      case "right":
        this.image_url = left_right;
        return [45,0];
      default:
        this.image_url = up_down;
        return [0,0];
    }
  }

  wontCollide(key, dx, dy, walls) {
    // returns bool
    // walls is an array/pojo: { 0: [353, 88], ...

    const moveToX = this.x + dx;
    const moveToY = this.y + dy;
    return (
      checkPlayAreaCollision(moveToX, moveToY) &&
      checkWallCollision(moveToX, moveToY, walls)
    );
  }

  move(key, walls) {
    const temp = makeAmove(this.direction, key);
    let movement;

    if (temp instanceof Array) {
      movement = temp;
    } else {
      movement = [0,0];
      this.direction = temp;
    }

    const dx = movement[0];
    const dy = movement[1];

    if ( this.wontCollide(key, dx, dy, walls) ) {
      this.x += dx;
      this.y += dy;
      this.draw();
    }
  }

  draw () {
    const sprite_data = this.updateSpriteImage();

    const ctx = this.ctx;
    this.sprite.updateImage(
      this.image_url,
      this.x, this.y,
      sprite_data[0], sprite_data[1]
    );
    // updates image url, exports relevant image positioning since L-R and Up-Dw are combinded png's


    // ctx.beginPath(); // simple character box
    //   ctx.fillStyle="#9cd0e5"; // pale blue dot
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

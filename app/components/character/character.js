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
    this.imageDirectionData = this.imageDirectionData.bind(this);
  }

  mapKeyToMove(key) {
    // 37, left // 38, up // 39, right // 40, down
    switch (key){
      case 37:
        if ( this.isFacing("left") ) {
          return [-this.size, 0]; // then move left
        } else {
          return [0,0];
        }
        break; // linters
      case 38:
        if ( this.isFacing("up") ) {
          return [0, -this.size];
        } else {
          return [0,0];
        }
        break;
      case 39:
        if ( this.isFacing("right") ) {
          return [this.size, 0];
        } else {
          return [0,0];
        }
        break;
      case 40:
        if ( this.isFacing("down") ) {
          return [0, this.size];
        } else {
          return [0,0];
        }
        break;
      default:
        return [0,0];
    }
  }

  isFacing(direction) {
    if (this.direction !== direction) {
      this.direction = direction;
      return false;
    } // else this.dir === dir
    return true;
  }

  imageDirectionData() {
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

  move(key) {
    const movement = this.mapKeyToMove(key);
    const dx = movement[0];
    const dy = movement[1];
    const checkX = this.x + dx;
    const checkY = this.y + dy;

    if ( (checkX > 345 && checkX < 750 ) && (checkY > 80 && checkY < 485) ) {
      this.x += dx;
      this.y += dy;
      this.draw();
    }
  }

  draw () {
    const ctx = this.ctx;
    const sprite_data = this.imageDirectionData();
    // updates image url, exports relevant image positioning since L-R and Up-Dw are combinded png's

    new Sprite (
      this.ctx,
      this.image_url,
      this.x, this.y,
      sprite_data[0], sprite_data[1]
    );

    // ctx.beginPath();
    //   ctx.fillStyle="#9cd0e5"; // pale blue dot
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

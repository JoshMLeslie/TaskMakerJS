import * as Colors from '../../util/font_colors';

export default class Character {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.size = 45;
    this.width = this.size;
    this.height = this.size;

    this.x = 533; // center x
    this.y = 268; // center y

    this.move = this.move.bind(this);
  }

  mapKeyToMove(key) {
    // 37, left // 38, up // 39, right // 40, down
    switch (key){
      case 37:
        return [-this.size, 0];
      case 38:
        return [0, -this.size];
      case 39:
        return [this.size, 0];
      case 40:
        return [0, this.size];
      default:
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

    ctx.beginPath();
      ctx.fillStyle="#9cd0e5"; // pale blue dot
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

import * as Colors from '../../assets/font_colors';

export default class Character {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.size = 15;
    this.width = this.size;
    this.height = this.size;

    this.x = 435;
    this.y = 245;

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

    if ( (checkX > 340 && checkX < 755 ) && (checkY > 75 && checkY < 490) ) {
      this.x += dx;
      this.y += dy;
      this.draw();
    }
  }

  draw () {
    const ctx = this.ctx;

    ctx.beginPath();
      ctx.fillStyle="#98C0D0"; // pale blue dot
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

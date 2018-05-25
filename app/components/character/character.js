import * as Colors from '../../assets/font_colors';

export default class Character {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 10;
    this.height = 10;

    this.x = 450;
    this.y = 250;

    this.move = this.move.bind(this);

  }

  keyToVal(e) {
    // 37, left // 38, up // 39, right // 40, down
    switch (e){
      case 37:
        return [-10, 0];
      case 38:
        return [0, -10];
      case 39:
        return [10, 0];
      case 40:
        return [0, 10];
      default:
        return [0,0];
    }
  }

  move(e) {

    const temp = this.keyToVal(e.keyCode);
    const dx = temp[0];
    const dy = temp[1];
    // debugger
    this.x += dx;
    this.y += dy;
    // debugger
    this.draw();
  }

  draw () {
    const ctx = this.ctx;

    ctx.beginPath();
      ctx.fillStyle="#98C0D0"; // pale blue dot
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

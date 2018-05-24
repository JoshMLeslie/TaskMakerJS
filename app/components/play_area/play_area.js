export default class PlayArea {

  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 415;
    this.height = 415;

    const centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 15;
    this.y = canvasEl.height - this.height - centering + 10 ;
  }

   draw () {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}

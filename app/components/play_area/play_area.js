export default class PlayArea {

  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 415;
    this.height = 415;

    const centering = (canvasEl.height - this.height) / 2;
    this.y = (canvasEl.height - this.height + 10 - centering) ;
    this.x = canvasEl.width - this.width + 5 - centering;
  }

   draw () {
    this.ctx.fillStyle = "black"; // hey bebebe
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}

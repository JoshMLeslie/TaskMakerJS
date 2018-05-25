export default class PlayArea {

  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 420;
    this.height = 420;

    const centering = (canvasEl.height - this.height) / 2;
    this.x = canvasEl.width - this.width - centering + 30;
    this.y = canvasEl.height - this.height - centering + 25 ;
  }

   draw () {
    this.ctx.clearRect(this.x, this.y, this.width, this.height);

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}

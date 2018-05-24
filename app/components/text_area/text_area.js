export default class TextArea {
  constructor (canvasEl, ctx) {
    this.ctx = ctx;
    this.width = 250;
    this.height = 305;

    this.x = 10;
    this.y = 10;
  }

   draw () {
    this.ctx.fillStyle = "#FFFFCF";
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}

export default class Sprite  {
  // https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/sprite.js

  constructor (ctx, width, height, image_url) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.image =  new Image ();

    this.image.onload = () => {
      this.image.src = image_url;
    };

    this.draw = this.draw.bind(this);
  }

  draw () {
    /* (
    image,
    sx, sy,
    sWidth, sHeight,
    dx, dy,
    dWidth, dHeight
    ) */
debugger
    this.ctx.drawImage(
      this.image,
        0, 0,
        35, 35,
        400, 150,
        this.width, this.height
    );
  }
}
